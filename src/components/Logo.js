export default function Logo({ small = false }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`bg-grad shadow-glow inline-flex items-center justify-center rounded-lg font-mono font-bold tracking-[-0.06em] text-white ${small ? "h-[26px] w-[26px] text-[10.5px]" : "h-7 w-7 text-[11px]"}`}
      >
        &lt;/&gt;
      </span>
      <span className={`font-display font-extrabold tracking-[-0.035em] leading-none whitespace-nowrap text-ink ${small ? "text-[17px]" : "text-[18px]"}`}>
        cyrancode<span className="blink text-brand">_</span>
      </span>
    </span>
  );
}
