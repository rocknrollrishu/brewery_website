import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 container">
      <h4 className="text-5xl">Cheers from Fans</h4>
      <p className="text-[#78716C] text-xl mb-10">Happy Customers</p>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-950 dark:border-gray-800">
          <blockquote className="text-lg font-semibold leading-snug">
            “The online ordering process was exceptional. The website made
            everything seamless and addressed my concerns.”
          </blockquote>
          <div className="mt-4 flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={48}
                src="/brewery_website/assets/user.png"
                style={{
                  aspectRatio: '48/48',
                  objectFit: 'cover',
                }}
                width={48}
              />
            </div>
            <div>
              <div className="font-medium">Jules Winnfield</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CEO, Acme Inc
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-950 dark:border-gray-800">
          <blockquote className="text-lg font-semibold leading-snug">
            “I was impressed with the online order experience. The website
            ensured a seamless process and addressed my concerns.”
          </blockquote>
          <div className="mt-4 flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={48}
                src="/brewery_website/assets/user.png"
                style={{
                  aspectRatio: '48/48',
                  objectFit: 'cover',
                }}
                width={48}
              />
            </div>
            <div>
              <div className="font-medium">Mia Wallace</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Founder, Diner
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-950 dark:border-gray-800">
          <blockquote className="text-lg font-semibold leading-snug">
            “The brewery&apos;s customer service was outstanding. The support
            team went above and beyond to assist me with my concerns.”
          </blockquote>
          <div className="mt-4 flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={48}
                src="/brewery_website/assets/user.png"
                style={{
                  aspectRatio: '48/48',
                  objectFit: 'cover',
                }}
                width={48}
              />
            </div>
            <div>
              <div className="font-medium">Vincent Vega</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Daily Buyer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
