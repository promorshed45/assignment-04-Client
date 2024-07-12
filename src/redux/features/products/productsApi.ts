import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (productData) => ({
                    method: 'POST',
                    url: '/products',
                    body: productData,
                })     
        }),
        getAllProducts: builder.query({
            query: (searchTerm) => {
                const params = new URLSearchParams();
                if(searchTerm){
                    params.append("searchTerm", searchTerm)
                }
                return {
                    url: '/products',
                    method: 'GET',
                    params: params,
                }
            }
        }),
        getSingleProduct: builder.query({
            query: (id: string) => ({
                method: 'GET',
                url: `/products/${id}`,
            })
        }),

    })
})

export const { useCreateProductMutation, useGetAllProductsQuery, useGetSingleProductQuery } = productApi;

// createProduct: builder.mutation({
//     query: (data) => ({
//         url: '/products',
//         method: 'POST',
//         body: data,
//     })
// }),

// createProduct: builder.mutation({
//     query: (data) => {
//         console.log(data);
//         return {
//             url: '/products',
//             method: 'POST',
//             body: data,
//         }
//     }
// }),