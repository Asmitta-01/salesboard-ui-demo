import { Badge } from "@/components/ui/badge";
import type { Status, StockStatus } from "@/lib/mock-data";

const statusVariant: Record<Status, "success" | "warning" | "muted"> = {
  Completed: "success",
  Pending: "warning",
  Cancelled: "muted",
};

export function StatusBadge({ status }: { status: Status }) {
  return <Badge variant={statusVariant[status]}>{status}</Badge>;
}

const stockVariant: Record<StockStatus, "success" | "warning" | "destructive"> = {
  "In stock": "success",
  "Low stock": "warning",
  "Out of stock": "destructive",
};

export function StockBadge({ status }: { status: StockStatus }) {
  return <Badge variant={stockVariant[status]}>{status}</Badge>;
}

export function ActiveBadge({ status }: { status: "Active" | "Inactive" }) {
  return <Badge variant={status === "Active" ? "success" : "muted"}>{status}</Badge>;
}
