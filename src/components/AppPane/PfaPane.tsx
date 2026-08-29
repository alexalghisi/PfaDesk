import { formatLei, pfaSketch } from "@/lib/pfa";
import { usePfaStore } from "@/store/pfaStore";

export function PfaPane() {
  const netLei = usePfaStore((state) => state.netLei);
  const employeeHealth = usePfaStore((state) => state.employeeHealth);
  const setNetLei = usePfaStore((state) => state.setNetLei);
  const setEmployeeHealth = usePfaStore((state) => state.setEmployeeHealth);
  const sketch = pfaSketch(netLei, employeeHealth);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
      <div className="space-y-4 overflow-auto p-5">
        <p className="text-[13px] text-muted-foreground">
          Educational sistem-real sketch for 2026. Not ANAF advice. Fork{" "}
          <code className="text-[12px]">src/lib/pfa.ts</code>.
        </p>
        <label className="block text-[13px]">
          Net income (lei)
          <input
            type="number"
            min={0}
            step={1000}
            data-testid="input-net"
            className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-[14px]"
            value={netLei}
            onChange={(event) => setNetLei(Number(event.target.value))}
          />
        </label>
        <label className="flex items-center gap-2 text-[13px]">
          <input
            type="checkbox"
            data-testid="check-employee"
            checked={employeeHealth}
            onChange={(event) => setEmployeeHealth(event.target.checked)}
          />
          Already pay CASS as an employee (drop the 6-wage floor)
        </label>
      </div>
      <aside className="space-y-3 border-t border-border bg-sidebar p-5 md:border-t-0 md:border-l">
        <Row label="CASS 10%" value={formatLei(sketch.cass)} testId="cass" />
        <Row label="CAS 25%" value={formatLei(sketch.cas)} testId="cas" />
        <Row label="Income tax 10%" value={formatLei(sketch.incomeTax)} testId="tax" />
        <Row label="Total set aside" value={formatLei(sketch.total)} testId="total" />
        <Row label="Take-home" value={formatLei(sketch.takeHome)} testId="takehome" />
      </aside>
    </div>
  );
}

function Row({ label, value, testId }: { label: string; value: string; testId: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span className="text-[18px] font-semibold tabular-nums" data-testid={testId}>
        {value}
      </span>
    </div>
  );
}
