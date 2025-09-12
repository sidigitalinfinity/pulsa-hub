import { ShieldCheck, Clock, HeadphonesIcon, CreditCard } from "lucide-react";

const features = [
  { icon: Clock, title: "Proses Instan", desc: "Pesanan diproses otomatis 24/7" },
  { icon: CreditCard, title: "Pembayaran Lengkap", desc: "VA, e-wallet, QRIS, kartu kredit" },
  { icon: ShieldCheck, title: "Aman & Terpercaya", desc: "Enkripsi modern & anti-fraud" },
  { icon: HeadphonesIcon, title: "Dukungan 24/7", desc: "Tim support siap membantu" },
];

export function Features() {
  return (
    <section className="container py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border p-5">
            <div className="size-10 rounded-md bg-secondary text-primary grid place-items-center">
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
