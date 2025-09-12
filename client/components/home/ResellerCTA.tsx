import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";

export function ResellerCTA() {
  return (
    <section className="container py-12">
      <Card className="border-primary/30">
        <CardContent className="p-6 md:p-8 grid md:grid-cols-2 items-center gap-6">
          <div>
            <div className="text-sm font-semibold text-primary">
              Reseller & Developer
            </div>
            <h3 className="text-2xl font-bold mt-1">
              API Otomatis untuk Skala Bisnis Anda
            </h3>
            <p className="text-muted-foreground mt-2 max-w-prose">
              Dapatkan API key, kelola rate limit, dan akses harga reseller.
              Integrasi mudah untuk order otomatis, webhook status, dan
              settlement harian.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Button size="lg" className="gap-2">
              <KeyRound className="size-4" /> Dapatkan API Key
            </Button>
            <Button size="lg" variant="outline">
              Dokumentasi
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
