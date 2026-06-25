'use client'
import dynamic from 'next/dynamic'
import type { AuthorItem } from '@/app/_types'
const AuthorSliderInner = dynamic(() => import('@/app/_components/webComp/author/AuthorSliderInner'),{ ssr: false })

type Props = {
    author?: AuthorItem[]
}

export default function AuthorSlider({ author }: Props) {
    return <AuthorSliderInner author={author}/>
}