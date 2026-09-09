import { Search } from "lucide-react";
import type { ReactNode } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-3">{children}</div>
  );
}

export function SearchField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="relative min-w-0 flex-1 sm:max-w-xs">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input id={id} type="search" placeholder={placeholder} className="h-9 pl-9 text-sm" />
    </div>
  );
}

export function FilterSelect({
  id,
  label,
  options,
  width = "w-[150px]",
}: {
  id: string;
  label: string;
  options: string[];
  width?: string;
}) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <Select defaultValue={options[0]}>
        <SelectTrigger id={id} className={`h-9 ${width} text-sm`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function TablePagination({ from, to, total }: { from: number; to: number; total: number }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3">
      <p className="text-[12px] text-muted-foreground">
        Showing <span className="font-medium text-foreground tabular-nums">{from}</span>–
        <span className="font-medium text-foreground tabular-nums">{to}</span> of{" "}
        <span className="font-medium text-foreground tabular-nums">{total}</span>
      </p>
      <nav aria-label="Pagination" className="flex items-center gap-1">
        <button
          type="button"
          className="h-8 rounded-md border border-border px-3 text-[12px] font-medium text-muted-foreground hover:bg-muted disabled:opacity-50"
          disabled
        >
          Previous
        </button>
        <button
          type="button"
          aria-current="page"
          className="size-8 rounded-md bg-accent text-[12px] font-medium text-accent-foreground"
        >
          1
        </button>
        <button
          type="button"
          className="size-8 rounded-md border border-border text-[12px] font-medium text-muted-foreground hover:bg-muted"
        >
          2
        </button>
        <button
          type="button"
          className="size-8 rounded-md border border-border text-[12px] font-medium text-muted-foreground hover:bg-muted"
        >
          3
        </button>
        <button
          type="button"
          className="h-8 rounded-md border border-border px-3 text-[12px] font-medium text-muted-foreground hover:bg-muted"
        >
          Next
        </button>
      </nav>
    </div>
  );
}
