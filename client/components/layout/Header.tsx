import { Link, NavLink } from "react-router-dom";
import { Search, Globe, UserRound, ShoppingBag, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Pulsa" },
  { to: "/#paket-data", label: "Paket Data" },
  { to: "/#voucher-game", label: "Voucher Game" },
  { to: "/#topup-game", label: "Top Up Game" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md brand-gradient" />
          <span className="text-lg font-extrabold tracking-tight">PulsaHub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 rounded-md border bg-background px-3 py-1.5">
            <Search className="size-4 text-muted-foreground" />
            <Input className="h-8 border-0 focus-visible:ring-0" placeholder="Lacak pesanan / ID" />
          </div>
          <Button variant="ghost" size="icon" aria-label="Bahasa & Mata Uang">
            <Globe className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Keranjang">
            <ShoppingBag className="size-5" />
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/auth/login" className="flex items-center gap-2">
              <UserRound className="size-4" /> Masuk
            </Link>
          </Button>
          <Button asChild variant="outline" className="hidden lg:inline-flex">
            <Link to="/developers" className="flex items-center gap-2">
              <KeyRound className="size-4" /> API Reseller
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
