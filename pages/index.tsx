import Image from 'next/image';
import Header from '../components/Header';
import SearchFilters from 'components/SearchFilters';
import modernImg from '../public/images/1.jpeg';

export default function Home(props) {
  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <Header />
      <SearchFilters />
      <main className="px-4 py-6">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="mb-6 text-gray-600 ">
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div className="mt-6">
          <div>
            <div>
              <Image className="rounded-lg shadow-md h-64" src={modernImg} alt="Modern house" />
            </div>

            <div className="relative px-4 -mt-16">
              <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div className="flex items-center">
                  <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    Plus
                  </span>
                  <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    3 beds &bull; 2 baths
                  </div>
                </div>
                <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                  Modern home in city center
                </h4>
                <div className="mt-1">
                  <span className="text-gray-900">$1,400</span>
                  <span className="ml-1 text-sm text-gray-600">/wk</span>
                </div>
                <div className="mt-2 text-sm text-gray-600 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z"
                    />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z"
                    />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z"
                    />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z"
                    />
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z"
                    />
                  </svg>
                  <span className="ml-2"> 34 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
