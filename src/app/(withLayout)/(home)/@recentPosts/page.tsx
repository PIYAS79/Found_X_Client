import { Button } from "@nextui-org/button"
import Link from "next/link"
import { Get_All_Item_Actions } from "@/src/Actions/Get_All_Item"
import { Post_Type } from "@/src/types/card"
import Card from "@/src/components/UI/Card"
import Container from "@/src/components/UI/Container"
import { delay } from "@/src/utils/delay"



const ItemsSection = async () => {

    await delay(2000)
    const { data: items } = await Get_All_Item_Actions();

    return (
        <Container>
            <div className="py-16">
                <h1 className='text-4xl text-center font-bold mt-5'>Found Items</h1>
                <h1 className='text-sm text-center mt-1 mb-10'>Now its very easy with Found-X</h1>
                <div className="grid grid-cols-4 gap-2 my-5">
                    {
                        items.map((one: Post_Type) => <Card key={one._id} post={one} />)
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

export default ItemsSection
