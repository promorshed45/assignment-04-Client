export type TProduct= {
    _id?: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    stock: number,
} 

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
