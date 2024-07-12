export type TProduct= {
    _id?: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    stock: number,
} 

export type TFilterInitialState = {
    searchTerm: string | null,
    
}