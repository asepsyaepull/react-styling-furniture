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
        <section className='flex flex-col container mx-auto px-4 md:px-8 pt-10 md:pt-20 gap-4 md:gap-8' id='testimoni'>
            <div className='flex flex-col items-center justify-center gap-2 md:gap-4 text-center'>
                <span className='text-sm text-orange-500'>Testimonials</span>
                <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold'>What our customers say about us</h1>
            </div>
            <div className='relative w-full max-w-full md:max-w-screen-xl mx-auto'>
                <button onClick={scrollLeft} className='absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 md:p-2 rounded-full shadow-md z-10 hover:bg-orange-400 hover:text-white'>
                    <HiChevronLeft />
                </button>
                <div ref={scrollContainerRef} className='flex w-full overflow-x-auto snap-x snap-mandatory snap-center items-start mb-4 md:mb-8 gap-2 md:gap-4 px-2 md:px-8 mx-0 md:mx-8 no-scrollbar'>
                    {testimonials.map(testimoni => (
                        <CardReview key={testimoni.id} testimoni={testimoni} />
                    ))}
                </div>
                <button onClick={scrollRight} className='absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 md:p-2 rounded-full shadow-md z-10 hover:bg-orange-400 hover:text-white'>
                    <HiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Testimonials