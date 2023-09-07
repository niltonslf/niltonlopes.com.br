import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from './components';
import { experiences } from './data/experiences';

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className='container ml-auto mr-auto px-10  md:px-10 lg:px-32'>
      <div className='flex flex-col md:flex-row md:items-start '>
        <header className='top-0 flex  flex-col  pt-32 sm:w-full md:sticky md:w-1/4 '>
          <h1 className='text-5xl font-extrabold'>Nilton Lopes</h1>
          <h2 className='text-2xl font-medium'>Front end Developer</h2>
          <p className='mt-2 text-slate-300'>
            Creating cool products and providing great user experiences for the
            web.
          </p>

          <div className=' mt-10 flex flex-row gap-5'>
            <a
              href='https://github.com/niltonslf'
              title='Go to my github profile'
              target='_blank'
            >
              <GithubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/niltonslf/'
              title='Go to my LinkedIn profile'
              target='_blank'
            >
              <LinkedinIcon />
            </a>
          </div>
        </header>

        <div className='flex-1 pt-20 md:px-10 md:pt-32 lg:px-32'>
          <section className='mb-8 flex-1 text-slate-300 '>
            <h1 className='mb-8 text-2xl font-medium'>About me</h1>
            <p className='mb-3'>
              I'm a front-end developer with 8 years of experience building web
              products. I want to widen my horizons and create amazing products
              for businesses all over the world.
            </p>
            <p className='mb-3'>
              I prefer to stay in constant contact with my colleagues to ensure
              that I'm doing my best for the product and that my decisions
              empower them. Furthermore, I'm the type of professional who feels
              a sense of ownership, and I also aim to consider the user side to
              ensure that the product is very simple, friendly, and an amazing
              experience.
            </p>
            <p>
              One project that I particularly enjoyed working on was an
              application that displayed data from spinning bikes in real time
              via web sockets. The idea behind it was a dashboard that could
              display data collected from the bikes on a large screen in the
              gym. While the athletes were performing the exercises, they could
              view information such as ranking, average speed, distance, and so
              forth. To do that, It was used React.js, socket.io and Node.js.
            </p>
          </section>

          <section className='mb-8 flex-1 text-slate-300 '>
            <h1 className='mb-8 text-2xl font-medium'>Experience</h1>

            {experiences.map((exp) => {
              return (
                <article
                  key={exp.id}
                  className='mb-8 flex flex-1 flex-row gap-10'
                >
                  <div>
                    {exp.startMonthAndYear} ~ {exp.endMonthAndYear}
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-5 flex items-center gap-3 font-bold text-white'>
                      {exp.role} - {exp.company}
                      {exp.logo && (
                        <Image
                          src={`/companies/${exp.logo}`}
                          alt='Logo'
                          width={25}
                          height={25}
                          className='rounded-full'
                        />
                      )}
                    </h3>
                    <p>{exp.description}</p>
                    <div className='mt-5 flex flex-wrap gap-2'>
                      {exp.skills.map((skill) => {
                        return (
                          <span
                            key={skill}
                            className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}

            <div className='mt-5 flex justify-center border-t-2 border-solid border-t-gray-300 pt-5'>
              <a
                href='https://www.linkedin.com/in/niltonslf/details/experience/'
                target='_blank'
                className='text-md flex items-center rounded-full bg-teal-400/10 px-4 py-2 font-medium leading-5 text-teal-300 '
              >
                See all experiences
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
