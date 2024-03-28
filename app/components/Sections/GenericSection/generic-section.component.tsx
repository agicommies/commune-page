import Image from 'next/image'
import { ForwardRefExoticComponent, SVGProps } from 'react'

type Feature = {
  description: string
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
}

type GenericSectionProps = {
  title: string
  subtitle: string
  sectionName: string
  features: Feature[]
  lightColor: string
  bgColor: string
  index: number
  color: string
  iconSrc: string
}

export const GenericSection = ({
  title,
  subtitle,
  sectionName,
  features,
  lightColor,
  bgColor,
  index,
  color,
  iconSrc,
}: GenericSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${index % 2 === 1 ? `dark:bg-[#0C1320] ${lightColor}` : 'dark:bg-[#131B2A]'} flex h-full w-full items-center justify-center p-4 lg:p-6`}
    >
      <div
        className={`w-full max-w-screen-sm rounded-xl bg-white dark:bg-[#131B2A] lg:max-w-screen-xl ${index % 2 === 1 ? "border-2 border-title bg-[url('/section-background-squares.svg')] bg-cover shadow-custom" : "bg-[url('/section-background-dots.svg')] bg-cover"} p-5 lg:px-16 lg:py-16`}
      >
        <div className='relative flex flex-col bg-clip-border text-left'>
          <div className='flex items-center'>
            <div className={`mr-6 ${bgColor} rounded-full`}>
              <Image
                src={iconSrc}
                width={70}
                height={70}
                alt={sectionName}
                className='min-h-[80px] min-w-[80px] hover:animate-tada lg:h-[110px] lg:w-[110px]'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='mt-2 text-left text-2xl font-bold tracking-tight text-title dark:text-white sm:text-4xl lg:text-5xl'>
                {title}
              </p>
              <h2
                className={`text-left text-base font-medium lg:text-2xl ${color}`}
              >
                {subtitle}
              </h2>
            </div>
          </div>
          <dl className='mx-auto mt-16 grid grid-cols-1 gap-8 text-base leading-7 text-subtitle dark:text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
            {features.map((feature, index) => (
              <div key={index} className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-subtitle dark:text-white'
                    aria-hidden='true'
                  />
                </dt>
                <dd className='inline'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
