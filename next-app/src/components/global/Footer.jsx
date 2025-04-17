'use client';

import { FacebookIcon, TwitterIcon,  } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f9f6f1] text-black px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-orange-500 rotate-45 rounded-sm" />
            <span className="text-2xl font-semibold">AVIATRIX</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <FacebookIcon className="w-6 h-6 bg-black text-white p-1 rounded-full" />
            <TwitterIcon className="w-6 h-6 bg-black text-white p-1 rounded-full" />
            {/* <LinkedIn className="w-6 h-6 bg-black text-white p-1 rounded-full" /> */}
          </div>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-green-600 font-bold mb-2">LEARN</h3>
          <ul className="space-y-1">
            <li>Customers</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Partners</li>
            <li>Documentations</li>
            <li>ACE Training</li>
          </ul>
        </div>

        {/* Build */}
        <div>
          <h3 className="text-green-600 font-bold mb-2">BUILD</h3>
          <ul className="space-y-1">
            <li>Aviatrix Answers</li>
            <li>Learning Center</li>
            <li>Aviatrix Blog</li>
          </ul>
        </div>

        {/* Engage */}
        <div>
          <h3 className="text-green-600 font-bold mb-2">ENGAGE</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Community</li>
            <li>Careers</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-xl font-semibold mb-4">
          Get Aviatrix updates and customer newsletters
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input
            type="email"
            placeholder="Enter business email"
            className="w-full sm:w-96 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2">
          <p>© 2025 Aviatrix, Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#">Terms of Use</a>
            <a href="#">Export Compliance</a>
            <a href="#">End of Life Policy</a>
            <a href="#">End of Sale Notice</a>
            <a href="#">Do Not Sell My Information</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
