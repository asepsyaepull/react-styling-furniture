import React from 'react'

const Material = props => {
    const { materials } = props
    return (
        <section className='flex container mx-auto max-w-screen-xl'>
            <div key={materials.id} className='grid grid-cols-2 items-center py-20'>
                <div className='flex w-full'>
                    <div className='flex flex-col w-fill items-start p-8 gap-5'>
                        <span className="text-sm text-orange-500">
                            {materials.title}
                        </span>
                        <h1 className="text-slate-900 text-3xl font-semibold">
                            {materials.subtitle}
                        </h1>
                        <p className='text-sm text-gray-400 text-wrap '>
                            {materials.description}
                        </p>
                        <button className='flex  items-center gap-2 text-orange-400'>
                            Learn More {materials.icon}
                        </button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col gap-4'>
                        <img
                            src={materials.image1}
                            alt={materials.title}
                            className='w-[223px] h-[223px] rounded-md object-cover'
                        />
                        <img
                            src={materials.image2}
                            alt={materials.title}
                            className='w-[223px] h-96 rounded-md object-cover object-left'
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img
                            src={materials.image3}
                            alt={materials.title}
                            className='w-[550px] h-96 rounded-xl object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Material