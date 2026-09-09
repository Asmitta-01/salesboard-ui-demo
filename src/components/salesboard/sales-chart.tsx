import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function SalesAreaChart({
  data,
  height = 240,
}: {
  data: { month: string; revenue: number }[];
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.18} />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={56}
            tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
            tickFormatter={(value: number) => `$${Math.round(value / 1000)}k`}
          />
          <Tooltip
            cursor={{ stroke: "var(--color-border)" }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid var(--color-border)",
              fontSize: 12,
              background: "var(--color-card)",
            }}
            formatter={(value: number) => [`$${value.toLocaleString("en-US")}`, "Revenue"]}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-primary)"
            strokeWidth={2}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
