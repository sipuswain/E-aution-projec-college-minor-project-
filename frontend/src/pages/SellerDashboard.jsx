import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>

          <p className="text-gray-600 mt-2">
            Manage your products and auctions.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Total Auctions</p>

            <p className="text-3xl font-bold mt-2">8</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Active Auctions</p>

            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Items Sold</p>

            <p className="text-3xl font-bold mt-2">5</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Seller Actions</h2>

          <div className="flex flex-wrap gap-4 mt-5">
            <Link
              to="/seller/auctions/new"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Add New Auction
            </Link>

            <Link
              to="/seller/auctions"
              className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50"
            >
              My Auctions
            </Link>
          </div>
        </div>

        {/* Recent Auctions */}
        <div className="mt-8 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-5">My Recent Auctions</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Item</th>
                  <th className="py-3">Current Bid</th>
                  <th className="py-3">Bids</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-4">Dell Laptop</td>

                  <td className="py-4">₹42,000</td>

                  <td className="py-4">18</td>

                  <td className="py-4 text-green-600">Active</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">Office Chair</td>

                  <td className="py-4">₹6,500</td>

                  <td className="py-4">11</td>

                  <td className="py-4 text-gray-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;