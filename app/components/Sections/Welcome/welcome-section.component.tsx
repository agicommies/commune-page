import { covered_by_your_grace } from '@/app/fonts'
import { sections } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'

export const WelcomeSection = () => {
  return (
    <div
      id='welcome'
      className='relative isolate flex h-auto w-full flex-col items-center justify-center bg-[#F9EFE4] p-10 py-12 dark:bg-[#0C1320] lg:py-20'
    >
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='absolute -left-20 top-[36%] -z-10 hidden lg:block'
      />
      <Image
        src={'/dotted-background.svg'}
        width={250}
        height={150}
        alt=''
        className='absolute bottom-[8%] right-5 -z-10 hidden lg:block'
      />
      <div className='mb-6 flex flex-col items-center text-center lg:mb-16'>
        <h3 className='mb-10 text-4xl font-bold text-title dark:text-white lg:mb-0 lg:text-5xl'>
          Welcome to the
          <span
            className={`${covered_by_your_grace.className} -ml-3 text-5xl font-normal text-[#FF6C6C] dark:text-titleDark lg:text-6xl`}
          >
            {' '}
            commune
          </span>
          !
        </h3>
        <h4 className='text-xl font-medium text-subtitle dark:text-gray-200'>
          A place for
          <span
            className={`${covered_by_your_grace.className} -mx-1 text-2xl font-normal text-[#62ABFF] dark:text-titleDark lg:text-3xl`}
          >
            {' '}
            everyone{' '}
          </span>
          to develop design and create.
        </h4>
      </div>

      <div className='flex w-full max-w-screen-sm flex-col justify-center space-y-10 lg:max-w-none lg:flex-row lg:space-x-5 lg:space-y-0 xl:space-x-8'>
        {sections.map((section) => {
          return (
            <Link
              href={`#${section.sectionName}`}
              key={section.sectionName}
              className='flex flex-row-reverse items-center justify-end rounded-xl border-2 border-title bg-white p-5 shadow-custom transition duration-300 hover:scale-105 dark:border-titleDark dark:bg-[#131B2A] dark:text-white dark:shadow-customDark lg:w-1/5 lg:max-w-[200px] lg:flex-col lg:justify-between lg:py-8'
            >
              <h5 className='w-2/3 text-left text-xl font-medium lg:mb-10 lg:w-full lg:text-center'>
                {section.title}
              </h5>
              <span className={`mr-5 lg:mr-0 ${section.bgColor} rounded-full`}>
                <Image
                  src={section.iconSrc}
                  width={70}
                  height={70}
                  alt={section.sectionName}
                  className='lg:h-[100px] lg:w-[100px]'
                />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
