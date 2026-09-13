function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">E-Auction</h2>

            <p className="mt-3 text-sm text-gray-400">
              A secure and simple platform for online auctions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>

            <div className="mt-3 space-y-2 text-sm">
              <p>Home</p>
              <p>Auctions</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold">Support</h3>

            <div className="mt-3 space-y-2 text-sm">
              <p>Help Center</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-500 text-center">
          © 2026 E-Auction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;