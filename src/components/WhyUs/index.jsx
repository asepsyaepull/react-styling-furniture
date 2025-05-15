const WhyUs = ({ whyus }) => {
    return (
        <section>
            <div className="flex flex-col md:flex-row max-w-screen-xl justify-between container mx-auto items-center bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 gap-8 md:gap-4">
                <div className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-slate-900 text-2xl md:text-3xl font-semibold">
                        Why <br className="hidden md:block" /> Choosing Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {/* render whyus dengan cara looping menggunakan map */}
                    {whyus.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full md:w-auto items-start justify-center gap-4 p-4 border-b sm:border-none pb-6 sm:pb-0"
                        >
                            <h2 className="text-lg md:text-xl text-slate-900 font-medium">{reason.title}</h2>
                            <p className="text-sm md:text-md font-light text-slate-500">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs