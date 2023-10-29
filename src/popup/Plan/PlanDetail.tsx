import React from 'react'

export default function Plan() {
    const products = [
        {
            id: '1',
            name: 'Freelancer',
            description: 'All the basics for starting a new business',
            prices: {
                currency: 'usd',
                unit_amount: 2400
            }
        },
        {
            id: '2',  // 一个新的ID
            name: 'Startup',
            description: 'All the basics for starting a new business!',
            prices: {
                currency: 'usd',
                unit_amount: 3200  // 代表 $32.00
            }
        }
        // 你可以在这里继续添加其他产品
    ];


    return (
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {products.map((product) => {
                const price = product.prices;
                if (!price) return null;
                const priceString = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: price.currency!,
                    minimumFractionDigits: 0
                }).format((price?.unit_amount || 0) / 100);
                return (
                    <div
                        key={product.id}
                        className=" 'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-pink-500">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold leading-6 text-white">
                                {product.name}
                            </h2>
                            <p className="mt-4 text-zinc-300">{product.description}</p>
                            <p className="mt-8">
                                <span className="text-5xl font-extrabold white">
                                    {priceString}
                                </span>

                            </p>

                        </div>
                    </div>
                );
            })}
        </div>
    )
}
