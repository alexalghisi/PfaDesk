export function WindowToolbar() {
  return (
    <header className="flex shrink-0 items-center gap-3 border-b border-black/5 bg-titlebar px-3 py-2">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-[#FF5F57] ring-1 ring-black/10" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E] ring-1 ring-black/10" />
        <span className="h-3 w-3 rounded-full bg-[#28C840] ring-1 ring-black/10" />
      </div>
      <h1 className="flex-1 text-center text-[13px] font-semibold tracking-tight text-foreground/80">
        PfaDesk
      </h1>
      <span className="text-[12px] text-muted-foreground">2026 sketch</span>
    </header>
  );
}
