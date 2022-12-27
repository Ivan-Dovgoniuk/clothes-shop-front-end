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
})
})
export const {useSendToCartMutation,useDeleteFromCartMutation} = userApi;