import Header from '../components/Header';
import SearchFilters from 'components/SearchFilters';
import Item from '../components/Item';

export default function Home(props) {
  return (
    <div
      className="min-h-screen bg-gray-200 antialiased
    xl:flex xl:flex-col">
      <div className="xl:flex-shrink-0">
        <Header />
      </div>
      <div className="xl:flex-1 xl:flex ">
        <SearchFilters />
        <main className="py-6 xl:flex-1">
          <div className="px-4">
            <h3 className="text-gray-900 text-xl">Los Angeles</h3>
            <p className="mb-6 text-gray-600 ">
              Live like the stars in these luxurious Southern California estates.
            </p>
          </div>
          <div className="mt-6 px-4 sm:px-4 sm:overflow-x-auto ">
            <div className="sm:flex sm:-mx-3 sm:pb-8">
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
