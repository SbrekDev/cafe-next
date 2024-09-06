"use client"

import { useStore } from "@/src/store"
import { Product } from "@prisma/client"

type AddProductBtnProps = {
    product: Product
}

export default function AddProductBtn({product}: AddProductBtnProps) {

    const addToCart = useStore((state)=> state.addToCart)

  return (
    <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        onClick={() => addToCart(product)}
    >Agregar</button>
  )
}
