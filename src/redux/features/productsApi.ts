import { baseApi } from "../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProducts: builder.mutation({
            query: (payload) => ({
                url: '/products',
                method: 'POST',
                body: payload
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

export const { useCreateProductsMutation, useGetAllProductsQuery } = productApi;