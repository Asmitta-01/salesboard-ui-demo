import { ArrowUpRight, type LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  change,
  comparison,
  icon: Icon,
}: {
  label: string;
  value: string;
  change: string;
  comparison: string;
  icon: LucideIcon;
}) {
  return (
    <article className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="truncate text-[13px] font-medium text-muted-foreground">{label}</h3>
        <span className="grid size-7 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
          <Icon aria-hidden="true" className="size-4" />
        </span>
      </div>
      <p className="mt-3 font-mono text-2xl font-semibold tracking-tight tabular-nums">{value}</p>
      <p className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[12px]">
        <span className="inline-flex items-center gap-0.5 font-medium tabular-nums text-primary">
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
          {change}
        </span>
        <span className="text-muted-foreground">{comparison}</span>
      </p>
    </article>
  );
}
