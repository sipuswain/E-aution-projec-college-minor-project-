import { Link } from "react-router-dom"

function Auctions() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-3xl font-bold text-gray-900">
            All Auctions
          </h1>

          <p className="text-gray-600 mt-2">
            Browse and bid on available products.
          </p>

        </div>
      </section>


      {/* Auctions */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Auction 1 */}
          <div className="bg-white rounded-xl border overflow-hidden">

            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">
                Product Image
              </span>
            </div>

            <div className="p-5">

              <p className="text-sm text-blue-600 font-medium">
                Electronics
              </p>

              <h2 className="text-xl font-semibold mt-2">
                Dell Laptop
              </h2>

              <p className="text-gray-500 mt-3">
                Current Bid
              </p>

              <p className="text-2xl font-bold">
                ₹40,000
              </p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>18 Bids</span>
                <span>2h 15m left</span>
              </div>

              <Link
                to="/auctions/1"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Auction
              </Link>

            </div>
          </div>


          {/* Auction 2 */}
          <div className="bg-white rounded-xl border overflow-hidden">

            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">
                Product Image
              </span>
            </div>

            <div className="p-5">

              <p className="text-sm text-blue-600 font-medium">
                Vehicles
              </p>

              <h2 className="text-xl font-semibold mt-2">
                Motorcycle
              </h2>

              <p className="text-gray-500 mt-3">
                Current Bid
              </p>

              <p className="text-2xl font-bold">
                ₹82,000
              </p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>24 Bids</span>
                <span>4h 40m left</span>
              </div>

              <Link
                to="/auctions"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                View Auction
              </Link>

            </div>
          </div>


          {/* Auction 3 */}
          <div className="bg-white rounded-xl border overflow-hidden">

            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">
                Product Image
              </span>
            </div>

            <div className="p-5">

              <p className="text-sm text-blue-600 font-medium">
                Furniture
              </p>

              <h2 className="text-xl font-semibold mt-2">
                Office Chair
              </h2>

              <p className="text-gray-500 mt-3">
                Current Bid
              </p>

              <p className="text-2xl font-bold">
                ₹6,500
              </p>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>11 Bids</span>
                <span>1h 05m left</span>
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
  )
}

export default Auctions;