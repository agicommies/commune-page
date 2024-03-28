'use client'
import { Disclosure } from '@headlessui/react'
import { covered_by_your_grace } from '@/app/fonts'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const FrequentQuestions = () => {
  return (
    <section
      className={`relative overflow-hidden bg-[#F9EFE4] px-10 py-16 text-left md:p-12 dark:bg-[#0C1320]`}
    >
      <div className='mx-auto max-w-4xl divide-y divide-white/10'>
        <h2 className='mb-10 text-center text-2xl font-bold text-title lg:mb-0 lg:text-4xl dark:text-white'>
          Frequently asked
          <span
            className={`${covered_by_your_grace.className} dark:text-titleDark -ml-3 text-4xl font-normal text-[#FF6C6C] lg:text-5xl`}
          >
            {' '}
            questions
          </span>
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-white/10'>
          {faqData.map((faq) => (
            <Disclosure as='div' key={faq.question} className='pt-6'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex w-full items-start justify-between text-left text-subtitle dark:text-white'>
                      <span className='text-base font-semibold leading-7'>
                        {faq.question}
                      </span>
                      <span className='ml-6 flex h-7 items-center'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'h-4 rotate-90 transform animate-open-accordion'
                              : 'h-4 rotate-0 transform animate-close-accordion'
                          }
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as='dd'
                    className='mt-2 animate-fade-slide-down text-pretty pr-12'
                  >
                    <p className='text-base leading-7 text-subtitle dark:text-gray-200'>
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  )
}
