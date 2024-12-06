import React from 'react'


const CardReview = props => {
    const { testimoni } = props;

    return (
        <div key={testimoni.id}
            className="flex w-[370px] h-[476px] items-end rounded-xl border border-gray-200 gap-4 mt-8 snap-center p-5"
            style={{ backgroundImage: `url(${testimoni.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='flex flex-col w-96 h-52 relative bg-white rounded-xl drop-shadow-xl'>
                <div className='flex w-full justify-center absolute -top-8'>
                    <img
                        src={testimoni.image}
                        alt={testimoni.name}
                        className='w-16 h-16 object-cover rounded-full border-[6px] border-white'
                    />
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full p-6 my-4'>
                    <h3 className='text-lg font-semibold'>{testimoni.name}</h3>
                    <p className='text-gray-400'>{testimoni.job}</p>
                    <p className='text-center text-sm py-6 md:text-center'>"{testimoni.review}"</p>
                </div>
            </div>
        </div>
    )
}

export default CardReview