import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/lovable-uploads/3925887f-1e18-4d52-9638-96efe4b8f087.png" alt="Logo" className="h-12" />
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-gold-400">HOME</Link>
              <Link to="/about" className="text-white hover:text-gold-400">ABOUT</Link>
              <Link to="/roadmap" className="text-white hover:text-gold-400">ROADMAP</Link>
              <Link to="/godspaper" className="text-white hover:text-gold-400">GODSPAPER</Link>
              <Link to="/airdrop" className="text-white hover:text-gold-400">AIRDROP</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-yellow-600 hover:bg-yellow-700 text-white border-none">
              Connect on Telegram
            </Button>
            <div className="h-10 relative">
              <img 
                src="/lovable-uploads/0a90efa6-f37d-4291-a8b9-505d7167b627.png" 
                alt="Login button background" 
                className="h-full cursor-pointer hover:brightness-110 transition-all"
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-semibold">
                Login
              </span>
            </div>
            <div className="h-10 relative">
              <img 
                src="/lovable-uploads/0343fffc-e589-4c17-bccf-ad2b04d56eb2.png" 
                alt="Sign up button background" 
                className="h-full cursor-pointer hover:brightness-110 transition-all"
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-semibold">
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};