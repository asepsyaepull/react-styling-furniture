import { useState } from 'react';

const Hero = ({ icons, hero }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <section id="hero" className="relative">
            <img
                src={hero.background}
                alt=""
                className='top-0 left-0 w-full h-screen object-cover'
            />
            <div className='absolute top-20 sm:top-28 md:top-40 left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-screen-md lg:max-w-screen-xl flex flex-col items-center justify-center gap-2 sm:gap-4'>
                <h1 className='flex flex-col text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold capitalize leading-normal sm:leading-tight md:leading-[70px] lg:leading-[80px] px-4'>
                    {hero.title.split(' ').slice(0, Math.ceil(hero.title.split(' ').length / 2)).join(' ')}
                    <span>
                        {hero.title.split(' ').slice(Math.ceil(hero.title.split(' ').length / 2)).join(' ')}
                    </span>
                </h1>
                <p className='flex font-normal opacity-80 text-white items-center justify-center text-center text-sm sm:text-base px-4'>
                    {hero.subtitle}
                </p>
                <form onSubmit={handleSearch} className='flex justify-center items-center p-4 w-full'>
                    <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                        <input
                            type="text"
                            placeholder="Search your furniture.."
                            className='w-full text-white border border-white bg-white bg-opacity-35 h-10 rounded-full pl-4 pr-12'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className='absolute right-1 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-2 text-white'
                        >
                            {icons[1].icon}
                        </button>
                    </div>
                </form>

                {/* Responsive positioning for animated dots */}
                <span className="hidden lg:flex absolute h-4 w-4 lg:-bottom-20 lg:right-80">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="hidden lg:flex absolute h-4 w-4 lg:-bottom-56 lg:left-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="hidden lg:flex absolute h-4 w-4 lg:-bottom-full lg:right-1/2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
            </div>
        </section>
    )
}

export default Hero