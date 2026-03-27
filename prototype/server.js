import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const BASE_SYSTEM_PROMPT = `You are Anchor Copilot, an AI assistant embedded in a billing platform for freelancers and small agencies.

Your job is to interpret natural language SMS messages and translate them into structured billing actions.

Always respond with valid JSON in this exact format:
{
  "sms_reply": "the message to send back to the user via SMS (keep it short, conversational)",
  "action": "one of: draft_agreement | add_line_item | send_reminder | status_check | mark_paid | confirm | unknown",
  "payload": {}
}

Action-specific payload schemas:

draft_agreement:
{
  "client_name": "string",
  "total_amount": number,
  "split": [50, 25, 25],  // percentages, must sum to 100
  "description": "string or null"
}

add_line_item:
{
  "description": "string",
  "amount": number
}

send_reminder:
{
  "client_name": "string or null",
  "all_overdue": boolean,
  "all_clients": boolean
}

mark_paid:
{
  "client_name": "string",
  "milestone_index": number
}

status_check:
{}

confirm:
{}

unknown:
{}

Rules:
- If the user says something like "draft a $4k agreement with Sarah, 50% upfront", infer a standard 50/25/25 split unless told otherwise.
- If the user types "yes", "confirm", "send it", treat it as action: confirm.
- Keep sms_reply under 160 characters when possible.
- Be warm but efficient. You are a copilot, not a chatbot.
- Never ask for more info than you need. Make reasonable inferences.
- Always confirm before creating an agreement: summarize what you understood and say "Reply YES to confirm."
- CRITICAL: sms_reply is your ONLY response — there is no follow-up message. Never write an acknowledgment ("Checking now...", "On it...", "Let me look..."). Always put the complete answer directly in sms_reply.
- For status questions (who owes money, who hasn't paid, overdue clients, etc.), use the agreements data provided to give a SPECIFIC answer with real names and amounts in a single sms_reply.`;

function buildSystemPrompt(agreements) {
  if (!agreements || agreements.length === 0) return BASE_SYSTEM_PROMPT;

  const summary = agreements.map(a => {
    const milestones = (a.milestones || []).map((m, i) =>
      `  - Milestone ${i} (${m.label || m.index}): $${m.amount} — ${m.status}${m.due_date ? ', due ' + m.due_date : ''}`
    ).join('\n');
    return `Client: ${a.client_name} | Project: ${a.description} | Total: $${a.total_amount} | Status: ${a.status}\n${milestones}`;
  }).join('\n\n');

  return `${BASE_SYSTEM_PROMPT}

--- CURRENT AGREEMENTS DATA ---
${summary}
--- END AGREEMENTS DATA ---`;
}

app.post('/api/chat', async (req, res) => {
  const { messages, agreements } = req.body;
  const systemPrompt = buildSystemPrompt(agreements);

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const text = response.content[0].text;

    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/) || text.match(/(\{[\s\S]*\})/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[1]) : JSON.parse(text);

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      sms_reply: `Error: ${err.message}`,
      action: "unknown",
      payload: {}
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Anchor backend running on port ${PORT}`));
