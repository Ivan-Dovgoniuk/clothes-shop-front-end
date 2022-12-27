import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any,{limit?:Number,page?:Number,gender?:String,size?:String[],color?:String,categoryQuery?:string,price?:Number[],isNewProduct?:Boolean,sale?:Boolean,searchField?:string}>({
      query: (arg) => `getProducts?limit=${arg.limit}&page=${arg.page}&gender=${arg.gender}&size=${arg.size}&color=${arg.color}&category=${arg.categoryQuery}&price=${arg.price}&isNewProduct=${arg.isNewProduct}&sale=${arg.sale}&searchField=${arg.searchField}`
    }),
    getProduct: builder.query({
      query: (id) => `getProduct/${id}`
    }),
    getProductBySearchField: builder.query<any,{searchField:string}>({
      query: (arg) => `getProductBySearchField?searchField=${arg.searchField}`
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: '/addProduct',
        method: 'POST',
        body,
        headers: {
        },
      }),
  }),                   
})
})
export const {useGetProductsQuery,useAddProductMutation,useGetProductQuery,useGetProductBySearchFieldQuery} = productsApi;