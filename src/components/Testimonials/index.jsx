import React, { useRef } from 'react'
import CardReview from '../Card/CardReview'
import { HiChevronLeft } from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi';

const Testimonials = ({ testimonials }) => {
    const scrollContainerRef = useRef(null);


    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className='flex flex-col container mx-auto max-w-screen-xl pt-20 gap-8' id='testimoni'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <span className='text-sm text-orange-500'>Testimonials</span>
                <h1 className='text-slate-900 text-3xl font-semibold'>What our customers say about us</h1>
            </div>
            <div className='relative w-[1188px]'>
                <button onClick={scrollLeft} className='absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10 hover:bg-orange-400 hover:text-white'>
                    <HiChevronLeft />
                </button>
                <div ref={scrollContainerRef} className='flex w-full overflow-x-auto snap-x snap-mandatory snap-center items-start mb-8 gap-4 px-8 mx-8 '>
                    {testimonials.map(testimoni => (
                        <CardReview key={testimonials.id} testimoni={testimoni} />
                    ))}
                </div>
                <button onClick={scrollRight} className='absolute -right-10 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md rotate-180 hover:bg-orange-400 hover:text-white'>
                    <HiChevronLeft />
                </button>
            </div>
        </section>
    )
}

export default Testimonials