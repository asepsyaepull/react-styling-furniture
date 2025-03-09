const Hero = ({ icons, hero }) => {
    return (
        <section id="hero">
            <img
                src={hero.background}
                alt=""
                className='top-0 left-0 w-full h-screen object-cover'
            />
            <div className='absolute top-40 left-1/2 -translate-x-1/2 max-w-screen-xl flex flex-col items-center justify-center gap-4 px-4 md:px-8'>
                <h1 className='flex text-white text-4xl md:text-6xl text-center font-semibold capitalize leading-tight md:leading-[80px]'>
                    {hero.title}
                </h1>
                <p className='flex font-normal opacity-80 text-white items-center justify-center text-center text-sm md:text-base'>
                    {hero.subtitle}
                </p>
                <div className='flex justify-center items-center p-4'>
                    <input
                        type="text"
                        placeholder="Search your furniture.."
                        className='absolute flex items-center justify-center w-[200px] md:w-[300px] text-white border border-white bg-white bg-opacity-35 h-10 rounded-full pl-4 pr-12'
                    />
                    <button className='relative flex justify-end top-auto left-24 md:left-32 bg-orange-400 rounded-full p-2 text-white'>
                        {icons[1].icon}
                    </button>
                </div>
                <span className="relative flex h-4 w-4 top-20 md:top-40 right-20 md:right-40">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="relative flex h-4 w-4 top-32 md:top-64 right-12 md:right-24">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="relative flex h-4 w-4 top-20 md:top-40 -left-[350px] md:-left-[700px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
            </div>
        </section>
    )
}

export default Hero