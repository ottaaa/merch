import React from 'react'
import {itemsService} from "@/services/api/items";


export const getStaticProps = async () => {
    const res = await itemsService.getItemsList()
    const items = JSON.parse(JSON.stringify(res.items));
    return {
        props: {
            items,
        }
    }
}

export default function Items(props: any) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">物販</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {props.items.map((item: { id: number, name: string, createdAt: string, updatedAt: string, }) => (
                        <div key={item.id} className="group relative">
                            <div
                                className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={""}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {/*<a href={item.href}>*/}
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {item.name}
                                        </a>
                                    </h3>
                                    {/*<p className="mt-1 text-sm text-gray-500">{item.color}</p>*/}
                                </div>
                                {/*<p className="text-sm font-medium text-gray-900">{item.price}</p>*/}
                                <p className="text-sm font-medium text-gray-900">"1000"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
