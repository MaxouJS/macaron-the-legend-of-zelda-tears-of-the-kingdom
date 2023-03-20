export default function Footer() {
  return (
    <nav className="absolute container bottom-4 text-xs text-neutral-900/25 font-medium p-8">
      <div className="flex flex-col md:items-end items-start space-y-3">
        <a href="/terms-of-use" target="_blank">Terms of use</a>
        <a href="/general-sales-conditions" target="_blank">General sales conditions</a>
        <a href="/privacy-policy" target="_blank">Pricacy policy</a>
        <a href="/legal-notice" target="_blank">Legal Notice</a>
      </div>
    </nav>
  );
};
