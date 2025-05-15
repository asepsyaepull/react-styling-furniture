const Experience = props => {
  const { experience } = props;

  return (
    <section className="flex container mx-auto max-w-screen-xl px-4 sm:px-6 my-16 sm:my-24 md:my-32 w-full" id="about">
      <div key={experience.id} className='grid md:grid-cols-2 grid-cols-1 w-full bg-stone-100 rounded-2xl overflow-hidden'>
        <div className='w-full'>
          <img
            src={experience.image}
            alt={experience.title}
            className='w-full h-64 sm:h-80 md:h-96 md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none object-cover'
          />
        </div>
        <div className='flex flex-col w-full md:w-2/3 items-start p-5 sm:p-6 md:p-8 gap-3 sm:gap-4 md:gap-5'>
          <span className="text-sm text-orange-500">
            {experience.title}
          </span>
          <h1 className="text-slate-900 text-2xl sm:text-3xl font-semibold">
            {experience.subtitle}
          </h1>
          <p className='text-sm text-gray-400 text-wrap'>
            {experience.description}
          </p>
          <button className='flex items-center gap-2 text-orange-400 mt-2'>
            Learn More {experience.icon}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience