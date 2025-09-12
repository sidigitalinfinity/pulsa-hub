import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const deals = [
  { name: "Telkomsel 10K", price: 10999, tag: "Terlaris" },
  { name: "XL 25K", price: 25999, tag: "Diskon" },
  { name: "Tri 50K", price: 49999, tag: "Termurah" },
  { name: "Indosat 100K", price: 98999, tag: "Populer" },
  { name: "MLBB 86 Diamonds", price: 19999, tag: "Instant" },
  { name: "Free Fire 100 Diamonds", price: 21999, tag: "Best Deal" },
];

export function Deals() {
  return (
    <section className="container py-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">Pilihan Terbaik Hari Ini</h2>
          <p className="text-sm text-muted-foreground">
            Harga transparan • Tanpa biaya tersembunyi
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {deals.map((d) => (
          <Card key={d.name} className="group">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{d.name}</h3>
                <Badge variant="secondary">{d.tag}</Badge>
              </div>
              <div className="mt-2 text-lg font-bold">
                Rp{d.price.toLocaleString("id-ID")}
              </div>
              <Button className="w-full mt-3" variant="outline">
                Isi Sekarang
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
