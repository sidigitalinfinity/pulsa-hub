/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

export type UserRole = "customer" | "reseller" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number; // in IDR
  updatedAt: string;
}

export type ProductCategory =
  | "pulsa"
  | "paket_data"
  | "voucher_game"
  | "topup_game";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  operatorId?: string; // for telco/voucher provider
  metadata?: Record<string, unknown>;
  active: boolean;
}

export interface Operator {
  id: string;
  name: string;
  type: "telco" | "supplier";
  active: boolean;
}

export interface PriceTier {
  id: string;
  productId: string;
  operatorId?: string;
  label: string; // e.g. "10K", "86 Diamonds"
  amount?: number; // quantity of units/diamonds
  basePrice: number; // provider cost (IDR)
  markupPercent?: number; // dynamic markup
  finalPrice: number; // base + markup
  currency: "IDR";
}

export type OrderStatus =
  | "created"
  | "processing"
  | "success"
  | "failed"
  | "refunded";

export interface Order {
  id: string; // e.g. PH-202501-000123
  userId?: string;
  productId: string;
  priceTierId: string;
  target: string; // phone number / player ID
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface OrderEvent {
  id: string;
  orderId: string;
  status: OrderStatus;
  providerResponse?: Record<string, unknown>;
  createdAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  provider: string; // gateway name
  amount: number;
  status: "pending" | "settled" | "failed";
  raw?: Record<string, unknown>;
  createdAt: string;
}

export interface WebhookLog {
  id: string;
  source: "provider" | "gateway";
  raw: Record<string, unknown>;
  createdAt: string;
}

export interface SettlementLog {
  id: string;
  paymentId: string;
  status: "ok" | "mismatch";
  details?: string;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  userId: string;
  keyPrefix: string; // safe to display
  createdAt: string;
  lastUsedAt?: string;
}

export interface RateLimitRule {
  id: string;
  subject: { type: "user" | "ip"; value: string };
  limit: number; // requests
  windowSeconds: number; // per window
  route: string; // e.g. "/api/orders"
}

/** Example response type for /api/demo */
export interface DemoResponse {
  message: string;
}
