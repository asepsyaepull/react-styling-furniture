import { useState, useRef } from "react";
import CardProduct from "../Card/CardProduct";

const Product = ({ productDescription, productList }) => {
    const sliderRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });

            // Update button visibility after scroll
            setTimeout(() => {
                setShowLeftButton(sliderRef.current.scrollLeft > 0);
                setShowRightButton(
                    sliderRef.current.scrollLeft <
                    sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
                );
            }, 300);
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });

            // Update button visibility after scroll
            setTimeout(() => {
                setShowLeftButton(sliderRef.current.scrollLeft > 0);
                setShowRightButton(
                    sliderRef.current.scrollLeft <
                    sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
                );
            }, 300);
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            setShowLeftButton(sliderRef.current.scrollLeft > 0);
            setShowRightButton(
                sliderRef.current.scrollLeft <
                sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
            );
        }
    };

    return (
        <section className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 mx-auto bg-slate-100 gap-8 md:gap-12 lg:gap-20" id="product">
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-sm text-orange-500">
                    {productDescription.subtitle}
                </span>
                <h1 className="text-slate-900 text-2xl md:text-3xl text-center font-semibold">
                    {productDescription.title}
                </h1>
                <p className="w-full md:w-3/4 lg:w-1/2 text-sm text-gray-400 text-center px-2 sm:px-0">
                    {productDescription.description}
                </p>
            </div>

            <div className="relative w-full mt-6 md:mt-10 lg:mt-4">
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex lg:justify-center overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 md:gap-8 pt-28 pb-8 scroll-smooth hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {productList.map(product => (
                        <div key={product.id} className="snap-start flex-shrink-0 ">
                            <CardProduct product={product} />
                        </div>
                    ))}
                </div>

                {showLeftButton && (
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
                        aria-label="Scroll left"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {showRightButton && (
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
                        aria-label="Scroll right"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Product;