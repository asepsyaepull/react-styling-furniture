import React from 'react'

const CTA = props => {
    const { cta } = props

    return (
        <section>
            <div key={cta.id} className='flex container mx-auto max-w-screen-xl px-4 sm:px-6 rounded-2xl my-10 sm:my-20'>
                <div className='relative w-full h-1/2'>
                    <img
                        src={cta.background}
                        alt={cta.title}
                        className='w-full h-64 sm:h-80 md:h-96 rounded-2xl object-cover'
                    />
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center w-full md:w-4/5 lg:w-3/4 px-4'>
                        <div className='flex flex-col items-center p-4 sm:p-6 md:p-8 gap-3 sm:gap-4 md:gap-6 rounded shadow w-full'>
                            <span className="rounded-full bg-white px-4 py-2 sm:px-6 sm:py-4 text-sm sm:text-md font-semibold text-orange-500">
                                {cta.discount}
                            </span>
                            <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-semibold">
                                {cta.title}
                            </h1>
                            <p className='w-full sm:w-3/4 md:w-1/2 text-xs sm:text-sm text-white text-center text-wrap'>
                                {cta.subtitle}
                            </p>
                            <div className='flex flex-col sm:flex-row items-center justify-center w-full relative'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full sm:w-96 pl-4 pr-4 sm:pr-36 py-3 sm:py-4 rounded-full text-sm text-black mb-2 sm:mb-0'
                                />
                                <button className='w-full sm:w-auto sm:absolute sm:right-1 sm:top-1/2 lg:-translate-y-1/2 lg:-translate-x-56 md:-translate-y-1/2 md:-translate-x-20 px-6 py-2 bg-orange-500 text-white text-md rounded-full'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA