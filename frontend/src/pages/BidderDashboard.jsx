import { Link } from "react-router-dom";

function BidderDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bidder Dashboard</h1>

          <p className="text-gray-600 mt-2">
            Manage your bids, auctions and orders.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Active Bids</p>

            <p className="text-3xl font-bold mt-2">5</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Won Auctions</p>

            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Orders</p>

            <p className="text-3xl font-bold mt-2">2</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <div className="flex flex-wrap gap-4 mt-5">
            <Link
              to="/auctions"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Browse Auctions
            </Link>

            <Link
              to="/bidder/bids"
              className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50"
            >
              My Bids
            </Link>

            <Link
              to="/bidder/orders"
              className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50"
            >
              My Orders
            </Link>
          </div>
        </div>

        {/* Recent Bids */}
        <div className="mt-8 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Recent Bids</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Auction</th>
                  <th className="py-3">Your Bid</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-4">Dell Laptop</td>

                  <td className="py-4">₹42,000</td>

                  <td className="py-4 text-green-600">Leading</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">Motorcycle</td>

                  <td className="py-4">₹85,000</td>

                  <td className="py-4 text-red-600">Outbid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidderDashboard;