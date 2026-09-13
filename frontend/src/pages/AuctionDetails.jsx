
function AuctionDetails() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Product Image */}
          <div className="bg-white rounded-xl border h-112.5 flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Product Image
            </span>
          </div>


          {/* Auction Information */}
          <div className="bg-white rounded-xl border p-8">

            <p className="text-blue-600 font-medium">
              Electronics
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              Dell Laptop
            </h1>

            <p className="text-gray-600 mt-4">
              High-performance laptop suitable for development,
              office work and everyday use.
            </p>


            {/* Current Bid */}
            <div className="mt-8">

              <p className="text-gray-500">
                Current Bid
              </p>

              <p className="text-3xl font-bold text-gray-900">
                ₹40,000
              </p>

            </div>


            {/* Auction Status */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Total Bids
                </p>

                <p className="text-xl font-semibold">
                  18
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Time Left
                </p>

                <p className="text-xl font-semibold">
                  2h 15m
                </p>
              </div>

            </div>


            {/* Bid Section */}
            <div className="mt-8">

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your Bid
              </label>

              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-medium hover:bg-blue-700"
              >
                Place Bid
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AuctionDetails