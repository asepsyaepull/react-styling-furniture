const Hero = ({ icons }) => {
    return (
        <section id="hero">
            <img
                src="https://s3-alpha-sig.figma.com/img/d2be/e090/11d0ef5c5aab59b69714774a45812d7d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz9wq3Egeter~ldaKBaep75se9eLaC86UuGvjzpX0Hgr2Zp7a6UNXHJUcGknGYMmL4B~FL5oYzc3tPDLUEcHi9J~oa1kIoLPByoJeD~50R9o~WwccU3CDGnca8C4qB~NdCa7-zZacDBQGJHQzACXkXjgFWzR6eMJnfG66YcB1GdGbBPdHu5ORsV4s6bAl98bzfn7CQ4bQQMjMIaweaxxpox81u~3GKdVanYqhOMh06D2alf8efjTag5s1z7hyl6jrWFcV3GjQMkjEO9rBIn8Hv1n-axN1D1L9OMYW3ZMAe5ELRAQNPcTe8ijnMxpPw3AwdtDmT1lvFPFcJnb-5OmRQ__"
                alt=""
                className='top-0 left-0 w-full h-screen object-cover'
            />
            <div className='absolute top-40 left-1/2 -translate-x-1/2 max-w-screen-xl flex flex-col items-center justify-center gap-4'>
                <h1 className='flex text-white text-6xl text-center font-semibold capitalize leading-[80px]'>
                    Make your interior more <br /> minimalistic & modern
                </h1>
                <p className='flex font-normal opacity-80 text-white items-center justify-center text-center'>
                    Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed
                </p>
                <div className='flex justify-center items-center p-4'>
                    <input
                        type="text"
                        placeholder="Search your furniture.."
                        className='absolute flex items-center justify-center w-[300px] text-white border border-white bg-white bg-opacity-35 h-10 rounded-full pl-4 pr-12'
                    />
                    <button className='relative flex justify-end top-auto left-32 bg-orange-400 rounded-full p-2 text-white'>
                        {icons[1].icon}
                    </button>
                </div>
                <span className="relative flex h-4 w-4 top-40 right-40">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="relative flex h-4 w-4 top-64 right-24">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
                <span className="relative flex h-4 w-4 top-40 -left-[700px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <button className="relative inline-flex rounded-full w-4 h-4 bg-white"></button>
                </span>
            </div>
        </section>
    )
}

export default Hero