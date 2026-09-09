import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("rounded-lg border border-border bg-card", className)}>{children}</section>
  );
}

export function PanelHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
      <div className="min-w-0">
        <h2 className="text-[15px] font-semibold tracking-tight">{title}</h2>
        {description ? <p className="text-[12px] text-muted-foreground">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
