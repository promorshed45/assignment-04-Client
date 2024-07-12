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
            query: ({ category, searchTerm, sort, categories }) => {

                const params = new URLSearchParams();
                if (category) {
                    params.append("category", category);
                }
                if (searchTerm) {
                    params.append("searchTerm", searchTerm);
                }
                if (sort) {
                    params.append("sort", sort.sort);
                }
                if (categories && categories.length > 0) {
                    params.append("category", categories);
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