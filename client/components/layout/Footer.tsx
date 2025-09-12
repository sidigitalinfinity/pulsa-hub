import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md brand-gradient" />
            <span className="text-lg font-extrabold">PulsaHub</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Platform top up pulsa, paket data, dan voucher game instan. Harga kompetitif untuk pelanggan dan reseller.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Produk</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/#pulsa" className="hover:text-foreground">Pulsa</Link></li>
            <li><Link to="/#paket-data" className="hover:text-foreground">Paket Data</Link></li>
            <li><Link to="/#voucher-game" className="hover:text-foreground">Voucher Game</Link></li>
            <li><Link to="/#topup-game" className="hover:text-foreground">Top Up Game</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">Tentang</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Kontak</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privasi</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Syarat</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Reseller & Developer</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/developers" className="hover:text-foreground">API Keys</Link></li>
            <li><Link to="/developers#limits" className="hover:text-foreground">Rate Limits</Link></li>
            <li><Link to="/settlement" className="hover:text-foreground">Settlement</Link></li>
            <li><Link to="/status" className="hover:text-foreground">Status</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} PulsaHub</p>
          <p>Keamanan pembayaran terenkripsi | Proses instan</p>
        </div>
      </div>
    </footer>
  );
}
