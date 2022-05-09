import { IProduct } from "../Product";

export interface IProductCardProps {
  product?: IProduct;
}

export type IProductAvatarProps = IProductCardProps;
export type IProductInfoProps = IProductCardProps;
