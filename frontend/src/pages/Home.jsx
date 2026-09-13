import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-4">
              ONLINE AUCTION PLATFORM
            </p>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Bid Smart.
              <br />
              Win What You Want.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Discover exciting auctions, place your bids and get the products
              you want at the right price.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/auctions"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Explore Auctions
              </Link>

              <Link
                to="/register"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Auctions
            </h2>

            <p className="text-gray-600 mt-2">
              Check out some of the latest auctions.
            </p>
          </div>

          <Link
            to="/auctions"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            View All →
          </Link>
        </div>

        {/* Auction Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>

            <div className="p-5">
              <span className="text-sm text-blue-600 font-medium">
                Electronics
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Laptop
              </h3>

              <p className="text-gray-500 mt-2">Starting Bid</p>

              <p className="text-xl font-bold text-gray-900">₹35,000</p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>12 Bids</span>
                <span>2h 30m left</span>
              </div>

              <Link
                to="/auctions"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Auction
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>

            <div className="p-5">
              <span className="text-sm text-blue-600 font-medium">
                Vehicles
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Motorcycle
              </h3>

              <p className="text-gray-500 mt-2">Starting Bid</p>

              <p className="text-xl font-bold text-gray-900">₹75,000</p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>8 Bids</span>
                <span>5h 20m left</span>
              </div>

              <Link
                to="/auctions"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Auction
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>

            <div className="p-5">
              <span className="text-sm text-blue-600 font-medium">
                Furniture
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Office Chair
              </h3>

              <p className="text-gray-500 mt-2">Starting Bid</p>

              <p className="text-xl font-bold text-gray-900">₹5,000</p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>15 Bids</span>
                <span>1h 10m left</span>
              </div>

              <Link
                to="/auctions"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Auction
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
