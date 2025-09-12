import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Smartphone, Signal } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "Pulsa",
    href: "#pulsa",
    desc: "Isi pulsa semua operator",
  },
  {
    icon: Signal,
    title: "Paket Data",
    href: "#paket-data",
    desc: "Kuota internet harian/bulanan",
  },
  {
    icon: Gamepad2,
    title: "Top Up Game",
    href: "#topup-game",
    desc: "Diamonds & currency",
  },
];

export function Categories() {
  return (
    <section className="container py-10" id="categories">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="group">
            <Card className="transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="size-10 rounded-md bg-secondary text-primary grid place-items-center">
                  <it.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
