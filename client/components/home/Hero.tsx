import { useState } from "react";
import { Phone, Gamepad2, Signal, Ticket, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const operators = [
  { id: "tsel", name: "Telkomsel" },
  { id: "xl", name: "XL Axiata" },
  { id: "tri", name: "Tri" },
  { id: "isat", name: "Indosat" },
  { id: "smart", name: "Smartfren" },
];

const pulsaDenoms = [10000, 25000, 50000, 100000];
const dataPacks = ["5 GB", "10 GB", "20 GB", "Unlimited" ];
const games = [
  { id: "mlbb", name: "Mobile Legends" },
  { id: "ff", name: "Free Fire" },
  { id: "pubg", name: "PUBG Mobile" },
  { id: "genshin", name: "Genshin Impact" },
];

export function Hero() {
  const [tab, setTab] = useState("pulsa");
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-20" />
      <div className="container relative py-12 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">Proses instan • Harga kompetitif</Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Top Up Pulsa, Paket Data & Voucher Game Instan
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              PulsaHub memudahkan pembelian pulsa, paket data, dan voucher game dengan proses cepat, harga transparan, dan dukungan 24/7.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Smartphone className="size-4"/> 500K+ pelanggan</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Gamepad2 className="size-4"/> 200+ game</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Signal className="size-4"/> Semua operator</div>
            </div>
          </div>

          <Card className="border-primary/20 shadow-[0_10px_30px_rgba(76,29,149,0.15)]">
            <CardContent className="p-4 md:p-6">
              <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="pulsa"><Phone className="mr-2 size-4"/>Pulsa</TabsTrigger>
                  <TabsTrigger value="data"><Signal className="mr-2 size-4"/>Data</TabsTrigger>
                  <TabsTrigger value="voucher"><Ticket className="mr-2 size-4"/>Voucher</TabsTrigger>
                  <TabsTrigger value="game"><Gamepad2 className="mr-2 size-4"/>Top Up</TabsTrigger>
                </TabsList>

                <TabsContent value="pulsa" className="pt-4">
                  <FormPulsa />
                </TabsContent>
                <TabsContent value="data" className="pt-4">
                  <FormData />
                </TabsContent>
                <TabsContent value="voucher" className="pt-4">
                  <FormVoucher />
                </TabsContent>
                <TabsContent value="game" className="pt-4">
                  <FormGame />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FormPulsa() {
  const [operator, setOperator] = useState<string>(operators[0].id);
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Nomor Telepon</Label>
          <Input type="tel" placeholder="08xxxxxxxxxx" />
        </div>
        <div className="space-y-2">
          <Label>Operator</Label>
          <Select value={operator} onValueChange={setOperator}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih operator" />
            </SelectTrigger>
            <SelectContent>
              {operators.map((op) => (
                <SelectItem key={op.id} value={op.id}>{op.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {pulsaDenoms.map((amt) => (
          <button key={amt} className="group rounded-lg border p-3 text-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="font-semibold">Rp{amt.toLocaleString("id-ID")}</div>
            <div className="text-xs text-muted-foreground">Mulai dari</div>
          </button>
        ))}
      </div>

      <Button className="w-full">Beli Sekarang <ChevronRight className="size-4 ml-1"/></Button>
    </div>
  );
}

function FormData() {
  const [operator, setOperator] = useState<string>(operators[0].id);
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Nomor Telepon</Label>
          <Input type="tel" placeholder="08xxxxxxxxxx" />
        </div>
        <div className="space-y-2">
          <Label>Operator</Label>
          <Select value={operator} onValueChange={setOperator}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih operator" />
            </SelectTrigger>
            <SelectContent>
              {operators.map((op) => (
                <SelectItem key={op.id} value={op.id}>{op.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {dataPacks.map((p) => (
          <button key={p} className="group rounded-lg border p-3 text-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="font-semibold">{p}</div>
            <div className="text-xs text-muted-foreground">Kuota</div>
          </button>
        ))}
      </div>

      <Button className="w-full">Beli Sekarang <ChevronRight className="size-4 ml-1"/></Button>
    </div>
  );
}

function FormVoucher() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Jenis Voucher</Label>
          <Select defaultValue="steam">
            <SelectTrigger>
              <SelectValue placeholder="Pilih voucher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="steam">Steam Wallet</SelectItem>
              <SelectItem value="ps">PlayStation</SelectItem>
              <SelectItem value="xbox">Xbox</SelectItem>
              <SelectItem value="google">Google Play</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Denominasi</Label>
          <Select defaultValue="10000">
            <SelectTrigger>
              <SelectValue placeholder="Pilih nominal" />
            </SelectTrigger>
            <SelectContent>
              {[10000, 50000, 100000, 250000].map((v) => (
                <SelectItem key={v} value={String(v)}>Rp{v.toLocaleString("id-ID")}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-full">Beli Sekarang <ChevronRight className="size-4 ml-1"/></Button>
    </div>
  );
}

function FormGame() {
  const [game, setGame] = useState<string>(games[0].id);
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Game</Label>
          <Select value={game} onValueChange={setGame}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih game" />
            </SelectTrigger>
            <SelectContent>
              {games.map((g) => (
                <SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>ID Player</Label>
          <Input placeholder="Masukkan ID" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[50, 100, 250, 500].map((d) => (
          <button key={d} className="group rounded-lg border p-3 text-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="font-semibold">{d} Diamonds</div>
            <div className="text-xs text-muted-foreground">Mulai dari</div>
          </button>
        ))}
      </div>
      <Button className="w-full">Beli Sekarang <ChevronRight className="size-4 ml-1"/></Button>
    </div>
  );
}
