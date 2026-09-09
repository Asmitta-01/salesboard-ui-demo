import { useState, type ReactNode } from "react";
import { Bell, Calendar, Menu, ChevronDown, LogOut, UserCog } from "lucide-react";

import { AppSidebar, SidebarContent } from "@/components/layout/app-sidebar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currentUser, dateRanges } from "@/lib/mock-data";

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="flex">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-border bg-card">
            <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation">
                      <Menu aria-hidden="true" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[268px] p-0">
                    <SheetTitle className="sr-only">Navigation</SheetTitle>
                    <SidebarContent onNavigate={() => setMobileOpen(false)} />
                  </SheetContent>
                </Sheet>
                <div className="min-w-0">
                  <h1 className="truncate text-base font-semibold leading-tight tracking-tight sm:text-lg">
                    {title}
                  </h1>
                  <p className="truncate text-[13px] leading-tight text-muted-foreground">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <label className="sr-only" htmlFor="date-range">
                    Date range
                  </label>
                  <Select defaultValue="Last 30 days">
                    <SelectTrigger id="date-range" className="h-9 w-[164px] gap-2 text-sm">
                      <Calendar aria-hidden="true" className="size-4 text-muted-foreground" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {dateRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="relative" aria-label="Notifications">
                      <Bell aria-hidden="true" />
                      <span
                        aria-hidden="true"
                        className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-72">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex-col items-start gap-0.5">
                      <span className="text-sm font-medium">3 products below minimum stock</span>
                      <span className="text-xs text-muted-foreground">Today, 09:12</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex-col items-start gap-0.5">
                      <span className="text-sm font-medium">Payment pending — Okafor &amp; Sons</span>
                      <span className="text-xs text-muted-foreground">Yesterday, 16:40</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex-col items-start gap-0.5">
                      <span className="text-sm font-medium">November revenue target reached</span>
                      <span className="text-xs text-muted-foreground">Nov 26, 11:05</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 rounded-md border border-border px-2 py-1.5 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span className="grid size-7 place-items-center rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
                      {currentUser.initials}
                    </span>
                    <span className="hidden text-sm font-medium md:block">
                      {currentUser.name.split(" ")[0]}
                    </span>
                    <ChevronDown aria-hidden="true" className="size-4 text-muted-foreground" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="leading-tight">
                      {currentUser.name}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {currentUser.role}
                      </span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserCog aria-hidden="true" className="mr-2 size-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut aria-hidden="true" className="mr-2 size-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="space-y-4 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
