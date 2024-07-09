import { baseApi } from "../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
                query: (productData) => ({
                    url: '/products',
                    method: 'POST',
                    body: productData,
                })
            }),
        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            })
        }),

    })
})

export const { useCreateProductMutation, useGetAllProductsQuery } = productApi;

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