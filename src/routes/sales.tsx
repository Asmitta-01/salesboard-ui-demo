import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Panel, PanelHeader } from "@/components/salesboard/panel";
import { StatusBadge } from "@/components/salesboard/status-badge";
import { FilterSelect, SearchField, TablePagination, Toolbar } from "@/components/salesboard/toolbar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sales } from "@/lib/mock-data";

export const Route = createFileRoute("/sales")({
  head: () => ({
    meta: [
      { title: "Sales — SalesBoard" },
      {
        name: "description",
        content: "Browse every sales order with reference, customer, items, total and status.",
      },
      { property: "og:title", content: "Sales — SalesBoard" },
      { property: "og:description", content: "Sales orders list with filters and status tracking." },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <AppShell title="Sales" subtitle="All sales orders and their current status">
      <Panel>
        <PanelHeader
          title="Sales orders"
          description={`${sales.length} orders in the selected period`}
          action={
            <Button size="sm">
              <Plus aria-hidden="true" />
              New sale
            </Button>
          }
        />
        <Toolbar>
          <SearchField id="sales-search" label="Search sales" placeholder="Search reference or customer" />
          <FilterSelect
            id="sales-date"
            label="Date filter"
            options={["All dates", "Today", "This week", "This month", "This quarter"]}
            width="w-[140px]"
          />
          <FilterSelect
            id="sales-status"
            label="Status filter"
            options={["All statuses", "Completed", "Pending", "Cancelled"]}
            width="w-[150px]"
          />
        </Toolbar>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="px-5 py-2.5 font-medium">Reference</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Customer</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Date</th>
                <th scope="col" className="px-3 py-2.5 text-right font-medium">Items</th>
                <th scope="col" className="px-3 py-2.5 text-right font-medium">Total</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Status</th>
                <th scope="col" className="px-5 py-2.5 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sales.map((sale) => (
                <tr key={sale.reference} className="hover:bg-muted">
                  <td className="px-5 py-3 font-mono text-[13px] font-medium tabular-nums">
                    {sale.reference}
                  </td>
                  <td className="px-3 py-3 font-medium">{sale.customer}</td>
                  <td className="px-3 py-3 font-mono text-[13px] tabular-nums text-muted-foreground">
                    {sale.date}
                  </td>
                  <td className="px-3 py-3 text-right tabular-nums text-muted-foreground">
                    {sale.items}
                  </td>
                  <td className="px-3 py-3 text-right font-mono tabular-nums">{sale.total}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={sale.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                          aria-label={`Actions for ${sale.reference}`}
                        >
                          <MoreHorizontal aria-hidden="true" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Edit order</DropdownMenuItem>
                        <DropdownMenuItem>Download invoice</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination from={1} to={sales.length} total={128} />
      </Panel>
    </AppShell>
  );
}
