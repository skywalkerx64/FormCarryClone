export interface User {
  id: number;
  fullName: string;
  email: string;

  balance?: number;
  phone_number?: string;
  country?: string;
  profile_photo?: string;
  email_verified_at?: string;

  is_active?: boolean;

  fcm_token?: string;
  socket_id?: string;
  roles: Role[];
}

export interface Role {
  title?: string;
  alias: string;
  description?: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  category?: string;
  status?: string;
  cover?: string;
  images?: string[];
  created_at?: string;
  updated_at?: string;
}

export type ProductCategory = {
  id: number;
  name: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export type Order = {
  id: number;
  reference: string;
  user_id?: number;
  user: User;
  details: OrderDetail[];
  total?: number;
  tax?: number;
  status?: number;
  created_at?: string;
  updated_at?: string;
}

export type OrderDetail = {
  id: number;
  order_id?: number;
  order?: Order;
  product_id?: number;
  product: Product;
  total?: number;
  tax?: number;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
}

export const ADMIN_ROLE_ALIAS = 'ADMIN'
export const CUSTOMER_ROLE_ALIAS = 'CUSTOMER'
export const CONTENT_CREATOR_ROLE_ALIAS = 'CONTENT_CREATOR'

export const ADMINS_ROLE_ALIASES = [ADMIN_ROLE_ALIAS]

export const ROLE_ALIASES = [
  ADMIN_ROLE_ALIAS,
  CUSTOMER_ROLE_ALIAS,
  CONTENT_CREATOR_ROLE_ALIAS,
]
