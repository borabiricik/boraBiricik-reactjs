export interface IProductsInitialState {
  products: IProduct[] | null;
  filteredProducts: IProduct[] | null | undefined;
  currentProduct: IProduct | null;
  selectedCategory: string | null;
  keyword: string | null;
}

export interface IProduct {
  createdAt?: number;
  name: string;
  avatar: string;
  developerEmail: string;
  price: number;
  id?: string;
  category: string;
  description: string;
}
