import React from 'react'

const CTA = props => {
    const { cta } = props

    return (
        <section>
            <div key={cta.id} className='flex container mx-auto max-w-screen-xl rounded-2xl my-20'>
                <div className='relative w-full h-1/2'>
                    <img
                        src={cta.background}
                        alt={cta.title}
                        className='w-full h-96 rounded-2xl object-cover'
                    />
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                        <div className='flex flex-col items-center p-8 gap-6 rounded shadow'>
                            <span className="rounded-full bg-white px-6 py-4 text-md font-semibold text-orange-500">
                                {cta.discount}
                            </span>
                            <h1 className="text-white text-center text-3xl font-semibold">
                                {cta.title}
                            </h1>
                            <p className='w-1/2 text-sm text-white text-center text-wrap '>
                                {cta.subtitle}
                            </p>
                            <div className='flex items-center justify-center'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='absolute w-96 pl-4 pr-36 py-4 rounded-full text-sm text-black'
                                />
                                <button className='relative left-full -translate-x-0 px-6 py-2 bg-orange-500 text-white text-md rounded-full'>
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