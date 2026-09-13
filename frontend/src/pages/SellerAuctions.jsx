function SellerAuctions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Auctions</h1>

          <p className="text-gray-600 mt-2">
            View and manage the auctions you have created.
          </p>
        </div>

        {/* Auction Table */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="border-b">
                  <th className="px-6 py-4">Item</th>
                  <th className="px-6 py-4">Starting Bid</th>
                  <th className="px-6 py-4">Current Bid</th>
                  <th className="px-6 py-4">Bids</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Dell Laptop</td>

                  <td className="px-6 py-4">₹35,000</td>

                  <td className="px-6 py-4">₹42,000</td>

                  <td className="px-6 py-4">18</td>

                  <td className="px-6 py-4 text-green-600">Active</td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Office Chair</td>

                  <td className="px-6 py-4">₹5,000</td>

                  <td className="px-6 py-4">₹6,500</td>

                  <td className="px-6 py-4">11</td>

                  <td className="px-6 py-4 text-gray-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerAuctions;
