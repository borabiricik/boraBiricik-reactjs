export interface ICategory {
  createdAt: Date;
  name: string;
  id: string;
}

export interface ICategoryStoreInitialState {
  categories: null | ICategory[];
}
