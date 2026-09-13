


function AdminDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>

          <p className="text-gray-600 mt-2">
            Manage users, auctions and platform activities.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Total Users</p>

            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Sellers</p>

            <p className="text-3xl font-bold mt-2">35</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Bidders</p>

            <p className="text-3xl font-bold mt-2">85</p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500">Active Auctions</p>

            <p className="text-3xl font-bold mt-2">18</p>
          </div>
        </div>

        {/* Management */}
        <div className="mt-10 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <button className="border border-gray-300 rounded-lg p-5 text-left hover:bg-gray-50">
              <p className="font-semibold">Manage Users</p>

              <p className="text-sm text-gray-500 mt-1">
                View and manage registered users.
              </p>
            </button>

            <button className="border border-gray-300 rounded-lg p-5 text-left hover:bg-gray-50">
              <p className="font-semibold">Manage Auctions</p>

              <p className="text-sm text-gray-500 mt-1">
                Monitor and manage auctions.
              </p>
            </button>

            <button className="border border-gray-300 rounded-lg p-5 text-left hover:bg-gray-50">
              <p className="font-semibold">Support Tickets</p>

              <p className="text-sm text-gray-500 mt-1">
                Review user complaints and tickets.
              </p>
            </button>
          </div>
        </div>

        {/* Recent Auctions */}
        <div className="mt-8 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Recent Auctions</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Item</th>
                  <th className="py-3">Seller</th>
                  <th className="py-3">Bids</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-4">Dell Laptop</td>

                  <td className="py-4">Seller 1</td>

                  <td className="py-4">18</td>

                  <td className="py-4 text-green-600">Active</td>
                </tr>

                <tr>
                  <td className="py-4">Motorcycle</td>

                  <td className="py-4">Seller 2</td>

                  <td className="py-4">24</td>

                  <td className="py-4 text-green-600">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;