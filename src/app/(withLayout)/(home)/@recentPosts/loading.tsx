import CardSkeleton from '@/src/components/UI/CardSkeleton'
import React from 'react'
import { Button } from "@nextui-org/button"
import Link from "next/link"
import Container from "@/src/components/UI/Container"

const loading = () => {
    return (
        <Container>
            <div className="py-16">
                <h1 className='text-4xl text-center font-bold mt-5'>Found Items</h1>
                <h1 className='text-sm text-center mt-1 mb-10'>Now its very easy with Found-X</h1>
                <div className="grid grid-cols-4 gap-2 my-5">
                    {
                        [...Array(4)].map(() => <CardSkeleton />)
                    }
                </div>

                <div className="flex justify-center w-full">
                    <Button className=" align-center">
                        <Link href={'/found-items'}>See All</Link>
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default loading
