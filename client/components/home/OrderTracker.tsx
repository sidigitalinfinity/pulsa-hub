import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function OrderTracker() {
  return (
    <section className="container py-12">
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1">
              <div className="text-sm font-semibold">Lacak Pesanan</div>
              <p className="text-sm text-muted-foreground">Masukkan nomor pesanan untuk melihat status.</p>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <Input placeholder="Contoh: PH-202501-000123" />
              <Button>Cek</Button>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-md border p-3 flex items-center justify-between"><span>Order dibuat</span><Badge variant="secondary">Sukses</Badge></div>
            <div className="rounded-md border p-3 flex items-center justify-between"><span>Dikirim ke provider</span><Badge variant="secondary">Sukses</Badge></div>
            <div className="rounded-md border p-3 flex items-center justify-between"><span>Proses</span><Badge>Instant</Badge></div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
