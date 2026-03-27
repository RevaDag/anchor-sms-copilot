import { useAgreement } from '../AgreementContext';
import ViewToggle from '../components/ViewToggle';
import './PlatformPage.css';

const Icon = {
  dashboard: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  proposals: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>,
  agreements: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  billing: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  invoices: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>,
  payouts: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  contacts: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  services: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  reports: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  integrations: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  settings: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  gift: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  chevron: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>,
  search: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  more: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>,
  bell: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  help: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  plus: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
};

const NAV = [
  { key: 'dashboard',    label: 'Dashboard' },
  { key: 'proposals',    label: 'Proposals',    arrow: true },
  { key: 'agreements',   label: 'Agreements',   active: true },
  { key: 'billing',      label: 'Billing' },
  { key: 'invoices',     label: 'Invoices' },
  { key: 'payouts',      label: 'Payouts' },
  { key: 'contacts',     label: 'Contacts' },
  { key: 'services',     label: 'Services',     arrow: true },
  { key: 'reports',      label: 'Reports' },
  { key: 'integrations', label: 'Integrations', arrow: true },
  { key: 'settings',     label: 'Settings',     arrow: true },
  { key: 'gift',         label: 'Refer & Earn' },
];

function fmt(date) {
  if (!date) return '—';
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function lastActivity(agr) {
  if (agr.last_reminded) return `Reminded ${fmt(agr.last_reminded)}`;
  const paid = [...(agr.milestones || [])].reverse().find(m => m.status === 'paid');
  if (paid?.due_date) return fmt(paid.due_date);
  return '—';
}

export default function PlatformPage() {
  const { agreements } = useAgreement();

  return (
    <div className="ap-root">
      {/* ── Sidebar ── */}
      <aside className="ap-sidebar">
        <div className="ap-logo">
          <svg viewBox="0 0 106 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="ap-logo-svg" color="white">
            <g clipPath="url(#platClip)">
              <g>
                <path d="M28.1102 30.7369C32.2262 31.4579 37.3451 22.8272 37.3451 22.8272L27.5591 23.4683C26.3001 27.1413 26.0092 29.8789 28.1102 30.7369Z" fill="url(#platG0)"/>
                <path d="M28.248 2.64507C27.335 1.30107 27.6601 1.16381 25.9691 0.905814C25.4321 0.825814 25.09 -1.10778 20.088 1.49322C13.405 4.96822 2.73802 16.8598 -0.000976562 20.5118L13.0381 19.6578C15.9961 16.1698 21.9171 9.63324 25.3881 7.88824C27.6901 6.28424 29.445 4.41007 28.248 2.64507Z" fill="url(#platG1)"/>
                <path d="M31.4561 14.8635C31.6561 14.4235 31.8291 14.0913 31.9201 13.8733C33.7201 9.52628 35.7911 6.54913 33.0701 3.29613C31.2151 1.07813 26.2081 -1.12173 21.9461 0.644274C23.7461 0.263274 25.1141 0.387219 25.9921 1.68822C27.5341 3.97422 24.3221 8.81549 23.1341 11.3435C21.7839 13.9794 20.6028 16.6982 19.5981 19.4841C18.9401 21.5291 18.3981 24.1454 19.8471 25.9914C21.1041 27.5914 24.6801 29.5073 25.6751 29.9363C26.5228 30.3617 27.4351 30.6435 28.3751 30.7703C24.5571 29.2383 28.8541 20.6755 31.4561 14.8635Z" fill="url(#platG2)"/>
              </g>
              <g fill="currentColor">
                <path d="M49.4312 11.256C49.0018 10.677 48.4487 10.2011 47.8122 9.86299C47.0789 9.47551 46.2605 9.27718 45.4312 9.28599C44.4753 9.27643 43.5351 9.52853 42.7122 10.015C41.9021 10.4966 41.2402 11.192 40.7992 12.025C40.3372 12.8975 40.101 13.8718 40.1122 14.859C40.1011 15.8459 40.3373 16.8198 40.7992 17.692C41.2405 18.5247 41.9023 19.22 42.7122 19.702C43.5361 20.1886 44.4774 20.4407 45.4342 20.431C46.2625 20.4393 47.0798 20.241 47.8122 19.854C48.4486 19.5161 49.0017 19.0406 49.4312 18.462V20.18H51.3562V9.53799H49.4312V11.256ZM48.3842 12.213C48.7276 12.561 48.9973 12.9747 49.1772 13.4293C49.3571 13.884 49.4435 14.3702 49.4312 14.859C49.4435 15.3476 49.3571 15.8337 49.1772 16.2882C48.9973 16.7426 48.7276 17.1561 48.3842 17.504C48.0438 17.8514 47.6355 18.1249 47.1847 18.3076C46.734 18.4903 46.2504 18.5783 45.7642 18.566C45.2757 18.5788 44.7897 18.4911 44.3365 18.3085C43.8832 18.1258 43.4723 17.852 43.1292 17.504C42.7844 17.157 42.5136 16.7437 42.3329 16.2891C42.1523 15.8345 42.0656 15.348 42.0782 14.859C42.0657 14.3698 42.1525 13.8831 42.3334 13.4283C42.5142 12.9735 42.7852 12.5601 43.1302 12.213C43.4735 11.8653 43.8845 11.5918 44.3377 11.4093C44.7909 11.2268 45.2768 11.1392 45.7652 11.152C46.2513 11.1397 46.7348 11.2275 47.1855 11.4101C47.6363 11.5926 48.0446 11.8659 48.3852 12.213"/>
                <path d="M58.9402 9.28598C58.2335 9.24844 57.5282 9.3819 56.8841 9.67506C56.2399 9.96822 55.676 10.4124 55.2402 10.97V9.53198H53.3172V20.179H55.2432V14.216C55.2256 13.8069 55.2919 13.3985 55.4381 13.016C55.5843 12.6336 55.8072 12.2851 56.0932 11.992C56.3966 11.7067 56.7542 11.4852 57.1449 11.3408C57.5355 11.1963 57.9512 11.1318 58.3672 11.151C58.7667 11.1324 59.1657 11.1962 59.5395 11.3382C59.9133 11.4803 60.2539 11.6977 60.5402 11.977C60.8157 12.2708 61.0294 12.6169 61.1687 12.9948C61.308 13.3727 61.3701 13.7747 61.3512 14.177V20.177H63.2772V13.623C63.3025 13.0445 63.2096 12.467 63.0043 11.9256C62.7991 11.3842 62.4856 10.8903 62.0832 10.474C61.6666 10.0739 61.1732 9.76232 60.6328 9.55813C60.0925 9.35395 59.5163 9.26137 58.9392 9.28598"/>
                <path d="M70.0852 11.152C70.7398 11.1462 71.3843 11.3139 71.9532 11.638C72.5037 11.9511 72.9586 12.4081 73.2692 12.96L73.3092 13.031L74.9822 12.025L74.9422 11.957C74.461 11.1375 73.7672 10.4634 72.9342 10.006C72.0621 9.52385 71.0797 9.27644 70.0832 9.28798C69.0732 9.27722 68.0776 9.52801 67.1932 10.016C66.3421 10.4857 65.6361 11.1799 65.1522 12.023C64.6577 12.8856 64.4025 13.8647 64.4132 14.859C64.4025 15.8533 64.6577 16.8323 65.1522 17.695C65.6359 18.5384 66.3414 19.2332 67.1922 19.704C68.0768 20.1913 69.0723 20.4417 70.0822 20.431C71.0769 20.4412 72.0574 20.1939 72.9282 19.713C73.7651 19.2545 74.4608 18.5761 74.9402 17.751L74.9802 17.684L73.3072 16.678L73.2672 16.748C72.9561 17.3008 72.5014 17.7593 71.9512 18.075C71.3836 18.4025 70.7385 18.5721 70.0832 18.566C69.5948 18.5787 69.1089 18.4911 68.6557 18.3086C68.2025 18.1261 67.7915 17.8526 67.4482 17.505C67.1034 17.1578 66.8324 16.7443 66.6516 16.2896C66.4708 15.8348 66.3839 15.3482 66.3962 14.859C66.384 14.3699 66.4708 13.8833 66.6514 13.4286C66.832 12.9739 67.1027 12.5604 67.4472 12.213C67.791 11.8651 68.2025 11.5915 68.6562 11.409C69.1099 11.2265 69.5963 11.139 70.0852 11.152"/>
                <path d="M81.6742 9.28598C80.9623 9.25027 80.2525 9.3901 79.6073 9.69316C78.9621 9.99623 78.4013 10.4532 77.9742 11.024V5.20898H76.0512V20.179H77.9772V14.216C77.9596 13.8069 78.0259 13.3985 78.1721 13.0161C78.3183 12.6336 78.5412 12.2851 78.8272 11.992C79.1306 11.7067 79.4882 11.4852 79.8789 11.3408C80.2695 11.1963 80.6852 11.1318 81.1012 11.151C81.5007 11.1323 81.8997 11.196 82.2736 11.3381C82.6474 11.4802 82.988 11.6977 83.2742 11.977C83.5498 12.2707 83.7636 12.6168 83.9029 12.9947C84.0422 13.3726 84.1042 13.7747 84.0852 14.177V20.177H86.0112V13.623C86.0365 13.0446 85.9437 12.4671 85.7386 11.9258C85.5335 11.3844 85.2204 10.8904 84.8182 10.474C84.4014 10.0741 83.908 9.76263 83.3677 9.55846C82.8274 9.35429 82.2513 9.26161 81.6742 9.28598"/>
                <path d="M92.8192 9.28599C91.8092 9.27536 90.8136 9.52615 89.9292 10.014C89.0775 10.4841 88.3709 11.1785 87.8862 12.022C87.3915 12.8846 87.1361 13.8636 87.1462 14.858C87.1359 15.8524 87.3914 16.8314 87.8862 17.694C88.3706 18.5376 89.0768 19.2324 89.9282 19.703C90.8128 20.1905 91.8082 20.4413 92.8182 20.431C93.5627 20.4488 94.3031 20.3163 94.9952 20.0414C95.6873 19.7665 96.3169 19.3548 96.8462 18.831C97.3754 18.3159 97.7928 17.6973 98.0724 17.0137C98.352 16.3302 98.4878 15.5963 98.4712 14.858C98.4879 14.1196 98.3522 13.3858 98.0726 12.7022C97.793 12.0186 97.3755 11.4 96.8462 10.885C96.3169 10.3612 95.6873 9.94949 94.9952 9.67458C94.3031 9.39966 93.5627 9.26716 92.8182 9.28499L92.8192 9.28599ZM95.4392 17.503C94.7337 18.1837 93.7915 18.5641 92.8112 18.5641C91.8308 18.5641 90.8887 18.1837 90.1832 17.503C89.8385 17.1557 89.5677 16.7422 89.387 16.2875C89.2064 15.8327 89.1197 15.3461 89.1322 14.857C89.1203 14.368 89.2076 13.8816 89.3887 13.4272C89.5699 12.9728 89.8412 12.5598 90.1862 12.213C90.8915 11.5318 91.8337 11.1511 92.8142 11.1511C93.7947 11.1511 94.7369 11.5318 95.4422 12.213C95.7852 12.5609 96.0545 12.9746 96.2339 13.429C96.4133 13.8835 96.4991 14.3695 96.4862 14.858C96.4988 15.3468 96.4125 15.8331 96.2326 16.2878C96.0527 16.7425 95.7828 17.1561 95.4392 17.504"/>
                <path d="M105.173 9.36598C104.485 9.34152 103.802 9.49353 103.19 9.80755C102.577 10.1216 102.055 10.5872 101.673 11.16V9.53698H99.7512V20.179H101.677V14.858C101.654 14.3903 101.724 13.9227 101.885 13.4829C102.046 13.0432 102.294 12.6402 102.613 12.298C102.953 11.9744 103.355 11.7237 103.796 11.561C104.236 11.3983 104.705 11.3272 105.173 11.352H105.603V9.36598H105.173Z"/>
              </g>
            </g>
            <defs>
              <linearGradient id="platG0" x1="21.3374" y1="28.3382" x2="42.3552" y2="21.5382" gradientUnits="userSpaceOnUse">
                <stop offset="0.18" stopColor="#4A0D73"/>
                <stop offset="0.277" stopColor="#7C2091"/>
                <stop offset="0.374" stopColor="#A731AB"/>
                <stop offset="0.461" stopColor="#C53DBD"/>
                <stop offset="0.535" stopColor="#D845C8"/>
                <stop offset="0.586" stopColor="#DF48CD"/>
              </linearGradient>
              <linearGradient id="platG1" x1="33.6178" y1="0.73056" x2="-5.39608" y2="45.2121" gradientUnits="userSpaceOnUse">
                <stop offset="0.045" stopColor="#001480" stopOpacity="0.898"/>
                <stop offset="0.079" stopColor="#063194" stopOpacity="0.918"/>
                <stop offset="0.162" stopColor="#1673C1" stopOpacity="0.953"/>
                <stop offset="0.233" stopColor="#21A3E2" stopOpacity="0.976"/>
                <stop offset="0.286" stopColor="#28C1F7" stopOpacity="0.992"/>
                <stop offset="0.316" stopColor="#2BCDFF"/>
                <stop offset="0.429" stopColor="#3EDBDB"/>
                <stop offset="0.562" stopColor="#52EAB7"/>
                <stop offset="0.634" stopColor="#5AF0AA"/>
              </linearGradient>
              <linearGradient id="platG2" x1="8.43512" y1="49.3546" x2="55.4736" y2="26.5893" gradientUnits="userSpaceOnUse">
                <stop offset="0.423" stopColor="#643CFF"/>
                <stop offset="0.609" stopColor="#7268FF"/>
                <stop offset="0.774" stopColor="#7D89FF"/>
                <stop offset="0.865" stopColor="#8296FF"/>
              </linearGradient>
              <clipPath id="platClip">
                <rect width="105.603" height="30.78" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <nav className="ap-nav">
          {NAV.map(item => (
            <div key={item.key} className={`ap-nav-item${item.active ? ' active' : ''}`}>
              <span className="ap-nav-label">{item.label}</span>
              {item.arrow && <span className="ap-nav-arrow">{Icon.chevron}</span>}
            </div>
          ))}
        </nav>

        <div className="ap-sidebar-foot">
          <button className="ap-bill-btn">
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Bill client
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="ap-main">
        {/* Topbar */}
        <div className="ap-topbar">
          <div className="ap-topbar-left" />
          <div className="ap-topbar-center">
            <ViewToggle light />
          </div>
          <div className="ap-topbar-right">
            <button className="ap-topbar-icon">{Icon.help}</button>
            <button className="ap-topbar-icon ap-bell">{Icon.bell}</button>
            <div className="ap-avatar">YC</div>
          </div>
        </div>

        {/* Content */}
        <div className="ap-content">
          <div className="ap-page-head">
            <h1 className="ap-page-title">Agreements</h1>
            <div className="ap-page-actions">
              <button className="ap-btn-secondary">
                More Actions {Icon.chevron}
              </button>
              <div className="ap-btn-primary-group">
                <button className="ap-btn-primary">Create proposal</button>
                <button className="ap-btn-primary ap-btn-primary-arrow">{Icon.chevron}</button>
              </div>
            </div>
          </div>

          {/* Filter bar */}
          <div className="ap-filters">
            <div className="ap-search">
              {Icon.search}
              <input type="text" placeholder="Search..." className="ap-search-input" />
            </div>
            <button className="ap-filter-pill">
              Agreement status (2) {Icon.chevron}
            </button>
            <button className="ap-add-filter">
              {Icon.plus} Add filter
            </button>
            <button className="ap-bulk-actions" style={{ marginLeft: 'auto' }}>
              Bulk actions {Icon.chevron}
            </button>
          </div>

          <div className="ap-count">{agreements.length} agreement{agreements.length !== 1 ? 's' : ''}</div>

          {/* Table */}
          <div className="ap-table-wrap">
            <table className="ap-table">
              <thead>
                <tr>
                  <th className="th-check"><input type="checkbox" /></th>
                  <th>Client name <span className="sort">↕</span></th>
                  <th>Amount <span className="sort">↕</span></th>
                  <th>Status <span className="sort">↕</span></th>
                  <th>Assignee <span className="sort">↕</span></th>
                  <th className="sort-active">Effective date <span className="sort">↓</span></th>
                  <th>Payment method <span className="sort">↕</span></th>
                  <th>Last activity <span className="sort">↕</span></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {agreements.map(agr => (
                  <tr key={agr.id} className="ap-row">
                    <td className="td-check"><input type="checkbox" /></td>
                    <td>
                      <div className="ap-company">{agr.client_name}</div>
                      <div className="ap-sub">{agr.description}</div>
                    </td>
                    <td className="ap-amount">${agr.total_amount.toLocaleString()}</td>
                    <td>
                      <span className={`ap-status ap-status-${agr.status}`}>
                        {agr.status.charAt(0).toUpperCase() + agr.status.slice(1)}
                      </span>
                    </td>
                    <td>Yam Cohen</td>
                    <td>{fmt(agr.effective_date)}</td>
                    <td className={agr.payment_method ? '' : 'ap-not-set'}>
                      {agr.payment_method || 'Not set'}
                    </td>
                    <td>{lastActivity(agr)}</td>
                    <td><button className="ap-row-more">{Icon.more}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
