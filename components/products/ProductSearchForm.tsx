"use client"
import { SearchSchema } from '@/src/schema'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function ProductSearchForm() {
    const router = useRouter()

    const handleSearchForm = (formdata: FormData) => {
        const data = {
            search: formdata.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issues => {
                toast.error(issues.message)
            })
            return
        }

        router.push(`/admin/products/search?search=${result.data.search}`)
    }

  return (
    <form 
        className='felx items-center'
        action={handleSearchForm}
    >
        <input 
            type="text" 
            placeholder='Buscar producto'
            className='p-2 placeholder-gray-400 w-full'
            name='search'        
        />
        <input 
            type="submit" 
            value={'Buscar'}
            className='bg-indigo-600 p-2 uppercase text-white cursor-pointer'
      
        />
    </form>
  )
}
