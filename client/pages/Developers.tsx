import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Developers() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl">
        <Badge variant="secondary">Reseller & Developer</Badge>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          PulsaHub API
        </h1>
        <p className="mt-2 text-muted-foreground">
          API publik untuk membuat pesanan otomatis, cek status, menerima
          webhook, dan melakukan rekonsiliasi. Dilengkapi API keys dan rate
          limits yang dapat dikonfigurasi per user.
        </p>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="limits">Rate Limits</TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Autentikasi</h3>
              <p className="text-sm text-muted-foreground">
                Gunakan header{" "}
                <code>Authorization: Bearer &lt;API_KEY&gt;</code> untuk setiap
                request.
              </p>
              <div className="mt-3 rounded-md bg-secondary p-3 text-xs">
                curl -H "Authorization: Bearer sk_live_xxx"
                https://api.pulsahub.com/v1/products
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Model Utama</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>users, wallets</li>
                <li>products, operators, prices</li>
                <li>orders, order_events, payments</li>
                <li>webhooks_log, settlement_logs, api_keys, rate_limits</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold">Daftar Endpoints</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Method</TableHead>
                      <TableHead>Path</TableHead>
                      <TableHead>Deskripsi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>GET</TableCell>
                      <TableCell>/v1/products</TableCell>
                      <TableCell>Daftar produk & harga</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>POST</TableCell>
                      <TableCell>/v1/orders</TableCell>
                      <TableCell>Buat pesanan top up</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>GET</TableCell>
                      <TableCell>/v1/orders/:id</TableCell>
                      <TableCell>Detail dan status pesanan</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>POST</TableCell>
                      <TableCell>/v1/payments/callback</TableCell>
                      <TableCell>Webhook dari payment gateway</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div>
                <h4 className="font-medium">Contoh Request</h4>
                <pre className="rounded-md bg-secondary p-4 text-xs overflow-auto">{`POST /v1/orders\n{
  "product_id": "pulsa_10k",
  "operator_id": "tsel",
  "target": "081234567890",
  "price_tier_id": "tsel_10k"
}`}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold">Webhook Events</h3>
              <p className="text-sm text-muted-foreground">
                Kami mengirim update status ke URL yang Anda daftarkan.
              </p>
              <pre className="rounded-md bg-secondary p-4 text-xs overflow-auto">{`POST /webhooks/orders\n{
  "order_id": "PH-202501-000123",
  "status": "success",
  "provider": "provider-x",
  "event_at": "2025-01-01T12:00:00Z"
}`}</pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limits" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Rate Limits</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subjek</TableHead>
                    <TableHead>Batas</TableHead>
                    <TableHead>Window</TableHead>
                    <TableHead>Route</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>60 req</TableCell>
                    <TableCell>60 detik</TableCell>
                    <TableCell>/v1/orders</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>IP</TableCell>
                    <TableCell>120 req</TableCell>
                    <TableCell>60 detik</TableCell>
                    <TableCell>/v1/*</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
