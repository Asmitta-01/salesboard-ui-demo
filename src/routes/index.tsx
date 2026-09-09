import { createFileRoute, Link } from "@tanstack/react-router";
import { DollarSign, Package, Users, Sigma } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { StatCard } from "@/components/salesboard/stat-card";
import { Panel, PanelHeader } from "@/components/salesboard/panel";
import { SalesAreaChart } from "@/components/salesboard/sales-chart";
import { StatusBadge } from "@/components/salesboard/status-badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { lowStockProducts, monthlySales, topProducts, transactions } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — SalesBoard" },
      {
        name: "description",
        content:
          "SalesBoard dashboard: revenue, orders, customers, recent transactions, top products and low stock alerts at a glance.",
      },
      { property: "og:title", content: "Dashboard — SalesBoard" },
      {
        property: "og:description",
        content: "Overview of your business performance: revenue, orders, customers and stock.",
      },
    ],
  }),
  component: DashboardPage,
});

const statIcons = { dollar: DollarSign, orders: Package, customers: Users, average: Sigma };

function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Overview of your business performance">
      <section aria-label="Key metrics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Revenue"
          value="$48,280"
          change="+12.5%"
          comparison="vs. previous month"
          icon={statIcons.dollar}
        />
        <StatCard
          label="Orders"
          value="1,284"
          change="+8.2%"
          comparison="vs. previous month"
          icon={statIcons.orders}
        />
        <StatCard
          label="Customers"
          value="3,842"
          change="+5.4%"
          comparison="vs. previous month"
          icon={statIcons.customers}
        />
        <StatCard
          label="Average order"
          value="$37.60"
          change="+3.1%"
          comparison="vs. previous month"
          icon={statIcons.average}
        />
      </section>

      <Panel>
        <PanelHeader
          title="Sales overview"
          description="Monthly revenue, trailing 12 months"
          action={
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-[12px]">
                <span aria-hidden="true" className="size-2 rounded-sm bg-primary" />
                Revenue
              </span>
              <label className="sr-only" htmlFor="chart-period">
                Chart period
              </label>
              <Select defaultValue="Monthly">
                <SelectTrigger id="chart-period" className="h-8 w-[124px] text-[12px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Quarterly">Quarterly</SelectItem>
                  <SelectItem value="Yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          }
        />
        <div className="px-2 py-4 sm:px-5">
          <SalesAreaChart data={monthlySales} height={260} />
        </div>
      </Panel>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Panel className="xl:col-span-2">
          <PanelHeader
            title="Recent transactions"
            action={
              <Link
                to="/transactions"
                className="text-[13px] font-medium text-primary hover:underline"
              >
                View all transactions
              </Link>
            }
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-5 py-2.5 font-medium">Customer</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Date</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-medium">Amount</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Payment method</th>
                  <th scope="col" className="px-5 py-2.5 text-right font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {transactions.slice(0, 6).map((trx) => (
                  <tr key={trx.id} className="hover:bg-muted">
                    <td className="px-5 py-3 font-medium">{trx.customer}</td>
                    <td className="px-3 py-3 font-mono text-[13px] tabular-nums text-muted-foreground">
                      {trx.date}
                    </td>
                    <td className="px-3 py-3 text-right font-mono tabular-nums">{trx.amount}</td>
                    <td className="px-3 py-3 text-muted-foreground">{trx.method}</td>
                    <td className="px-5 py-3 text-right">
                      <StatusBadge status={trx.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <div className="flex flex-col gap-4">
          <Panel>
            <PanelHeader title="Top products" />
            <ul className="divide-y divide-border">
              {topProducts.map((product) => (
                <li key={product.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{product.name}</p>
                    <p className="text-[12px] text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-sm tabular-nums">{product.revenue}</p>
                    <p className="text-[11px] tabular-nums text-muted-foreground">
                      {product.unitsSold} units
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel>
            <PanelHeader
              title="Low stock"
              action={
                <span className="inline-flex rounded-full bg-warning-soft px-2 py-0.5 text-[11px] font-medium text-warning-foreground">
                  {lowStockProducts.length} items
                </span>
              }
            />
            <ul className="divide-y divide-border">
              {lowStockProducts.map((product) => (
                <li key={product.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{product.name}</p>
                    <p className="text-[12px] text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-sm tabular-nums text-warning-foreground">
                      {product.stock}
                      <span className="text-muted-foreground"> / {product.minStock}</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground">{product.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
    </AppShell>
  );
}
