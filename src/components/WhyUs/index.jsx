const WhyUs = ({ whyus }) => {
    return (
        <section>
            <div className="flex max-w-screen-xl justify-between container mx-auto items-center bg-white py-32">
                <div>
                    <h1 className=" text-slate-900 text-2xl font-semibold">
                        Why <br /> Choosing Us
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {/* render whyus dengan cara looping menggunakan map */}
                    {whyus.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-80 items-start justify-center gap-4 p-4"
                        >
                            <h2 className="text-xl text-slate-900 font-medium">{reason.title}</h2>
                            <p className="text-md font-light text-slate-500">{reason.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyUs