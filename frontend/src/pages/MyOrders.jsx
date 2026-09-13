function MyOrders() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>

          <p className="text-gray-600 mt-2">
            View the products you have won through auctions.
          </p>
        </div>

        {/* Orders */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="border-b">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Winning Bid</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">Order Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Office Chair</td>

                  <td className="px-6 py-4">₹6,500</td>

                  <td className="px-6 py-4 text-green-600">Paid</td>

                  <td className="px-6 py-4 text-blue-600">Processing</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-medium">Headphones</td>

                  <td className="px-6 py-4">₹3,200</td>

                  <td className="px-6 py-4 text-yellow-600">Pending</td>

                  <td className="px-6 py-4 text-gray-500">Awaiting Payment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;