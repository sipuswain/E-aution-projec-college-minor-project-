function MyBids() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bids</h1>

          <p className="text-gray-600 mt-2">
            Track all the auctions you have participated in.
          </p>
        </div>

        {/* Bids Table */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="border-b">
                  <th className="px-6 py-4">Auction</th>
                  <th className="px-6 py-4">Your Bid</th>
                  <th className="px-6 py-4">Current Bid</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Dell Laptop</td>

                  <td className="px-6 py-4">₹42,000</td>

                  <td className="px-6 py-4">₹42,000</td>

                  <td className="px-6 py-4 text-green-600">Leading</td>
                </tr>

                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Motorcycle</td>

                  <td className="px-6 py-4">₹85,000</td>

                  <td className="px-6 py-4">₹88,000</td>

                  <td className="px-6 py-4 text-red-600">Outbid</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">Office Chair</td>

                  <td className="px-6 py-4">₹6,500</td>

                  <td className="px-6 py-4">₹6,500</td>

                  <td className="px-6 py-4 text-green-600">Won</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBids;