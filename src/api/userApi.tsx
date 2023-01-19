import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    sendToCart: builder.mutation({
      query: (body) => ({
        url: '/addToCart',
        method: 'POST',
        body,
        headers:{
          'Content-Type':'application/json',
          "Authorization":`Bearer ${localStorage.getItem('token')}`
        },
      }),
  }),
  deleteFromCart: builder.mutation({
    query: (body) => ({
      url: '/removeFromCart',
      method: 'POST',
      body,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      },
    }),
  }),
  removeFullCart: builder.mutation({
    query: (body) => ({
      url: '/removeFullCart',
      method: 'POST',
      body,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      },
    }),
  }),
  addFullCart: builder.mutation({
    query: (body) => ({
      url: '/addFullCart',
      method: 'POST',
      body,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      },
    }),
  }),
  addToFavoriteProducts: builder.mutation({
    query: (body) => ({
      url: '/addFavoriteProduct',
      method: 'POST',
      body,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      },
    }),
  }),
  deleteFromFavoriteProducts: builder.mutation({
    query: (body) => ({
      url: '/removeFromFavorite',
      method: 'POST',
      body,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      },
    }),
  }),
  getFavorite: builder.query<any,{products_id:string[]}>({
    query: (arg) => ({
      url:`/getFavorite?products_id=${arg.products_id}`,
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      }
    })
  })                                                                 
})
})
export const {
  useSendToCartMutation,
  useDeleteFromCartMutation,
  useAddFullCartMutation,
  useRemoveFullCartMutation,
  useAddToFavoriteProductsMutation,
  useDeleteFromFavoriteProductsMutation,
  useGetFavoriteQuery
} = userApi;