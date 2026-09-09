import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Receipt,
  FileBarChart,
  Settings,
  MoreVertical,
  LogOut,
  UserCog,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { currentUser } from "@/lib/mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const navItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Sales", to: "/sales", icon: ShoppingCart },
  { label: "Customers", to: "/customers", icon: Users },
  { label: "Products", to: "/products", icon: Package },
  { label: "Transactions", to: "/transactions", icon: Receipt },
  { label: "Reports", to: "/reports", icon: FileBarChart },
  { label: "Settings", to: "/settings", icon: Settings },
] as const;

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex h-16 items-center gap-2.5 border-b border-border px-5">
        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-sm font-semibold tracking-tight text-primary-foreground">
          S
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[15px] font-semibold tracking-tight">SalesBoard</p>
          <p className="truncate text-[11px] text-muted-foreground">Operations console</p>
        </div>
      </div>

      <p className="px-5 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Menu
      </p>
      <nav aria-label="Main" className="space-y-0.5 px-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            activeOptions={{ exact: item.to === "/" }}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
          >
            <item.icon aria-hidden="true" className="size-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-border p-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
              {currentUser.initials}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-medium">{currentUser.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">
                {currentUser.role}
              </span>
            </span>
            <MoreVertical aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              {currentUser.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/settings" onClick={onNavigate}>
                <UserCog aria-hidden="true" className="mr-2 size-4" />
                Account settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut aria-hidden="true" className="mr-2 size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export function AppSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen w-[248px] shrink-0 border-r border-border lg:flex lg:flex-col",
        className,
      )}
    >
      <SidebarContent />
    </aside>
  );
}
