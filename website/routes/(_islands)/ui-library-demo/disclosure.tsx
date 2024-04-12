import { Disclosure as HeadlessUiDisclosure } from '@headlessui/react';
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Disclosure() {
    return (
        <div className='w-full px-4 pt-16'>
            <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2'>
                <HeadlessUiDisclosure>
                    {({ open }) => (
                        <>
                            <HeadlessUiDisclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75'>
                                <span>What is your refund policy?</span>
                                {
                                    /*
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
                */
                                }
                            </HeadlessUiDisclosure.Button>
                            <HeadlessUiDisclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                                If you're unhappy with your purchase for any reason, email us within 90 days and we'll
                                refund you in full, no questions asked.
                            </HeadlessUiDisclosure.Panel>
                        </>
                    )}
                </HeadlessUiDisclosure>
                <HeadlessUiDisclosure as='div' className='mt-2'>
                    {({ open }) => (
                        <>
                            <HeadlessUiDisclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75'>
                                <span>Do you offer technical support?</span>
                                {
                                    /*
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
                */
                                }
                            </HeadlessUiDisclosure.Button>
                            <HeadlessUiDisclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                                No.
                            </HeadlessUiDisclosure.Panel>
                        </>
                    )}
                </HeadlessUiDisclosure>
            </div>
        </div>
    );
}
