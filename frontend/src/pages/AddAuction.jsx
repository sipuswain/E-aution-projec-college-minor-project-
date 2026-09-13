function AddAuction() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Create New Auction</h1>

        <p className="text-gray-600 mt-2">
          Add your product and create an auction.
        </p>

        <div className="bg-white border rounded-xl p-8 mt-8">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>

            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicles</option>
              <option value="furniture">Furniture</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe your product"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Starting Bid */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Starting Bid
            </label>

            <input
              type="number"
              placeholder="Enter starting bid"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Start Date */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auction Start Date
            </label>

            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* End Date */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auction End Date
            </label>

            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image
            </label>

            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-8 font-medium hover:bg-blue-700">
            Create Auction
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAuction;