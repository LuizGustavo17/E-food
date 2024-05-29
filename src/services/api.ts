import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../assets/pages/Home'

type Produtos = {
  id: number
  price: number
}

type Adress = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

type Card = {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

type PurchasePayload = {
  products: Produtos[]
  delivery: {
    receiver: string
    address: Adress
  }
  payment: {
    card: Card
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant, void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})
export const { useGetRestaurantsQuery, usePurchaseMutation } = api
export default api
