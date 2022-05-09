export interface IProductsInitialState {
  products: IProduct[] | null;
  filteredProducts: IProduct[] | null;
  isLoading: boolean;
}

export interface IProduct {
  createdAt: number;
  name: string;
  avatar: string;
  developerEmail: string;
  price: number;
  id: string;
  category: string;
  description: string;
}
