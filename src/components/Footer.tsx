import { CgCopyright } from "react-icons/cg";
import workSans from "@/fonts/fonts";
import {
  addresses,
  quickLinks,
  socialMedia,
} from "@/constants/footerComponents";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={` ${workSans.className} bg-[#001A40] mt-10 text-white p-8`}>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <object
          type="image/svg+xml"
          data="/svg/footerImage.svg"
          width={50}
          height={50}
          className="mb-4 sm:mb-0"
        ></object>
        <div className="flex gap-6 sm:gap-8 mt-4 sm:mt-0">
          {socialMedia.map((media,index) => (
            <div
              className={`bg-white cursor-pointer rounded-full text-2xl text-[#001A40] p-3 ${media.hover} transition-all duration-300`}
              key={index}
            >
              {media.logo}
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <hr className="border-gray-400" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h1 className="font-bold text-xl mb-3">Our Address</h1>
          {addresses.map((address) => (
            <div className="flex items-center gap-3 mb-2" key={address.value}>
              {address.logo}
              <h1>{address.value}</h1>
            </div>
          ))}
        </div>

        <div>
          <h1 className="font-bold text-xl mb-3">Quick Links</h1>
          {quickLinks.map((link) => (
            <div className="space-y-2" key={link.name}>
              <Link href={link.href} className="cursor-pointer">
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-xl text-center w-full max-w-[400px]">
            Join our newsletter to keep up to date with us!
          </h1>
          <div className="flex flex-col sm:flex-row w-full max-w-[400px] items-center bg-white p-3 rounded-md">
            <input
              type="email"
              className="flex-grow bg-white text-black outline-none border-none p-2"
              placeholder="email"
            />
            <button className="bg-[#2B71F0] text-white p-3 rounded-md sm:ml-2 mt-2 sm:mt-0 flex-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="my-6">
        <hr className="border-gray-400" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base py-4">
        <h1 className="flex items-center text-center sm:text-start gap-1">
          Copyright{" "}
          <span className="inline-block">
            <CgCopyright />
          </span>{" "}
          All Rights Reserved SawaPay 2024.
        </h1>

        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Link href={""}>Privacy Policy</Link>
          <h1>|</h1>
          <Link href={""}>Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
}
