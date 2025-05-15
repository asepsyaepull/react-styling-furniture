import React from 'react'

const Material = props => {
    const { materials } = props
    return (
        <section className='flex container mx-auto max-w-screen-xl px-4 md:px-6'>
            <div key={materials.id} className='flex flex-col md:grid md:grid-cols-2 items-center py-10 md:py-20 w-full'>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full items-start p-4 md:p-8 gap-3 md:gap-5'>
                        <span className="text-sm text-orange-500">
                            {materials.title}
                        </span>
                        <h1 className="text-slate-900 text-2xl md:text-3xl font-semibold">
                            {materials.subtitle}
                        </h1>
                        <p className='text-sm text-gray-400 text-wrap'>
                            {materials.description}
                        </p>
                        <button className='flex items-center gap-2 text-orange-400'>
                            Learn More {materials.icon}
                        </button>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 mt-8 md:mt-0'>
                    <div className='flex flex-row sm:flex-col gap-4 w-full sm:w-auto'>
                        <img
                            src={materials.image1}
                            alt={materials.title}
                            className='w-1/2 sm:w-[150px] md:w-[180px] lg:w-[223px] h-[150px] md:h-[180px] lg:h-[223px] rounded-md object-cover shadow-lg'
                        />
                        <img
                            src={materials.image2}
                            alt={materials.title}
                            className='w-1/2 sm:w-[150px] md:w-[180px] lg:w-[223px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-80 rounded-md object-cover object-left shadow-lg'
                        />
                    </div>
                    <div className='flex justify-center items-center mt-4 sm:mt-0'>
                        <img
                            src={materials.image3}
                            alt={materials.title}
                            className='w-full sm:w-[300px] md:w-[400px] lg:w-[550px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-96 rounded-xl object-cover shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Material