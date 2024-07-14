export interface  TProduct {
    _id?: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    stock: number,
} 

export type TProductInitialState = {
  product: TProduct;
};

export type TFiltersInitialState = {
    searchTerm: string | null;
    categories: string[];
    sort: string | null;
  };
  

export type TCategoryInitialState = {
    category: string | null;
  };
  
  interface ICartItem extends TProduct {
    quantity: number;
  }
  
  export type TCartInitialState = {
    items: ICartItem[];
  };



  export type TCartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }