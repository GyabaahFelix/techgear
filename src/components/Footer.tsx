import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image src="/techgearlogo.jpg" alt="TechGear Logo" width={200} height={200} />
          </Link>
          <p>
            TechGear HQ, <br />
            Arthur Junction, Race Course Road <br />
            Accra, Ghana
          </p>
          <span className="font-semibold">techgeargh@gmail.com</span>
          <span className="font-semibold">024 909 8850</span>
          <div className="mt-4 font-semibold">Follow us on</div>
          <div className="flex gap-6 mt-2">
            <a href="https://www.facebook.com/TechGearOfficial" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/TechGearOfficial" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/TechGear" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/company/techgear" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/TechGearOfficial" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About TechGear</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="">Become a Partner</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/list?cat=all-products">Laptops & PCs</Link>
              <Link href="/list?cat=all-products">TVs & Audio</Link>
              <Link href="/list?cat=all-products">Gaming Gear</Link>
              <Link href="/list?cat=all-products">Smart Home</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">SUPPORT</h1>
            <div className="flex flex-col gap-6">
              <Link href="/contact">Help Center</Link>
              <Link href="/WarrantyAndReturns">Warranty & Returns</Link>
              <Link href="/contact">Store Locator</Link>
              <Link href="/TermsAndConditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Don’t miss out on the latest gadgets, promotions, and TechGear exclusive offers!
          </p>
         
          <span className="font-semibold">Secure Payments</span>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Image src="/mtn.png" alt="MTN Mobile Money" width={60} height={40} /> {/* NEW ICON */}
            <Image src="/vodafone.jpg" alt="Vodafone Cash" width={60} height={40} /> {/* NEW ICON */}
            <Image src="/paypal.png" alt="PayPal" width={60} height={40} />
            <Image src="/mastercard.png" alt="MasterCard" width={60} height={40} />
            <Image src="/visa.png" alt="Visa" width={60} height={40} />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>
          © {new Date().getFullYear()} TechGear Ghana Ltd. <br /> All rights reserved.
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">English (Ghana)</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₵ GHS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
