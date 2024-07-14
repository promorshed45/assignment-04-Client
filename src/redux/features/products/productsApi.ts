import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
            },
            providesTags: ["product"],
        }),
       
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET',
            })
        }),
       
        createProduct: builder.mutation({
            query: (product) => ({
                method: 'POST',
                url: '/products',
                body: product,
            }),
            invalidatesTags: ["product"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
                url: `/products/update/${id}`,
                method: "PUT",
                body: product,
            }),
            invalidatesTags: ["product"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"],
        }),
    })
})

export const { useCreateProductMutation, useGetAllProductsQuery, useGetSingleProductQuery, useDeleteProductMutation, useUpdateProductMutation } = productApi;

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