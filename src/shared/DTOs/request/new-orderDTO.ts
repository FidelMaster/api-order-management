export interface NewOrderDTO {
  customer_id: number;
  customer_address_id: number;
  seller_id: number;
  customer_name: string;
  description?: string | null;
  exchange_rate: number;
  total_item: number;
  total_tax: number;
  total_discount: number;
  sub_total: number;
  total_order: number;
  estimated_delivery_date?: Date | null;
  items: OrderDetailDTO[]
}

export interface OrderDetailDTO {
  article_id: number;
  article_description: string;
  quantity: number;
  presentation?: string | null;
  unit_price: number;
  tax_percentage: number;
  total_tax: number;
  sub_total: number;
  discount_percentage: number;
  discount_amount: number;
  total: number;
}