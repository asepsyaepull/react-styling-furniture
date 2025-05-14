
const Experience = props => {
  const { experience } = props;

  return (
    <section className="flex container mx-auto max-w-screen-xl my-32 w-full gap-10" id="about">
      <div key={experience.id} className='grid grid-cols-2 w-full bg-stone-100 rounded-2xl'>
        <div className='w-full'>
          <img
            src={experience.image}
            alt={experience.title}
            className='w-[550px] h-96 rounded-l-2xl object-cover'
          />
        </div>
        <div className='flex flex-col w-2/3 items-start p-8 gap-5'>
          <span className="text-sm text-orange-500">
            {experience.title}
          </span>
          <h1 className="text-slate-900 text-3xl font-semibold">
            {experience.subtitle}
          </h1>
          <p className='text-sm text-gray-400 text-wrap '>
            {experience.description}
          </p>
          <button className='flex  items-center gap-2 text-orange-400'>
            Learn More {experience.icon}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience