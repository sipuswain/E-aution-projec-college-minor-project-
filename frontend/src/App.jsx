import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auctions from "./pages/Auctions";
import Navbar from "./components/Navbar";
import AuctionDetails from "./pages/AuctionDetails";
import BidderDashboard from "./pages/BidderDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import AddAuction from "./pages/AddAuction";
import SellerAuctions from "./pages/SellerAuctions";
import MyBids from "./pages/MyBids";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auctions/:id" element={<AuctionDetails />} />
        <Route path="/bidder/dashboard" element={<BidderDashboard />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/seller/auctions/new" element={<AddAuction />} />
        <Route path="/seller/auctions" element={<SellerAuctions />} />
        <Route path="/bidder/bids" element={<MyBids />} />
        <Route path="/bidder/orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
