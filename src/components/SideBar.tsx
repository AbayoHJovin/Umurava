"use client";

import { GoHome, GoGift, GoSignOut } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SidebarItemProps {
  profileImageUrl: string | StaticImport;
  href: string[];
  mobile?: boolean;
  mobileSidebarOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function SideBar({
  profileImageUrl,
  href = [],
  mobile = false,
  mobileSidebarOpen,
  onCloseMobile,
}: SidebarItemProps) {

  const [communityModalVisible, setCommunityVisible] = useState(false);
  const containerClass = mobile
    ? `fixed inset-y-0 left-0 w-64 bg-[#2B71F0] text-center flex flex-col justify-between p-6 z-50 transform transition-transform duration-300 ${
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`
    : `hidden md:flex ${"w-20 lg:w-[20%]"} h-screen fixed overflow-auto bg-[#2B71F0] text-center flex-col justify-between p-6`;


  return (
    <div className={`${containerClass} min-h-screen`}>
      {mobile && (
        <div className="flex justify-end">
          <button onClick={onCloseMobile} className="text-white text-2xl">
            &times;
          </button>
        </div>
      )}
      <div className="space-y-6">
        <Image
          src={"/umurava_logo.png"}
          alt="Logo"
          className="text-white"
          width={50}
          height={50}
        />
        {href[0] && (
          <SidebarItem
            href={href[0]}
            icon={<GoHome className="font-bold" size={25} />}
            label="Dashboard"
            mobile={mobile}
          />
        )}

        {href[1] && (
          <SidebarItem
            href={href[1]}
            icon={<FaRegFileLines className="font-bold" size={25} />}
            label="Challenges & Hackathons"
            mobile={mobile}
          />
        )}

        <SidebarItem
          onClick={() => setCommunityVisible(true)}
          label="Community"
          icon={<HiOutlineUserPlus className="font-bold" size={25} />}
          mobile={mobile}
        />
      </div>
      <div className="space-y-4">
        {href[2] && (
          <SidebarItem
            href={href[2]}
            icon={<VscSettingsGear className="font-bold" size={20} />}
            label="Settings"
            mobile={mobile}
          />
        )}

        {href[3] && (
          <SidebarItem
            href={href[3]}
            icon={<TfiHeadphoneAlt className="font-bold" size={20} />}
            label="Help center"
            mobile={mobile}
          />
        )}

        {href[4] && (
          <SidebarItem
            href={href[4]}
            icon={<GoGift className="font-bold" size={20} />}
            label="Refer family & friends"
            mobile={mobile}
          />
        )}

        <div className="flex items-center justify-between py-8 px-3 text-white">
          <div className="hidden md:flex items-center gap-4">
            <Image
              src={profileImageUrl}
              alt="Profile image"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <section className="text-start">
              <p className="font-medium truncate">Hilaire Sh</p>
              <p className="text-sm truncate">hilaire@uidesign</p>
            </section>
          </div>
          <GoSignOut className="font-bold" size={30} />
        </div>
      </div>
      <Modal
        communityModalVisible={communityModalVisible}
        handleClose={() => setCommunityVisible(false)}
      />
    </div>
  );
}

interface SidebarItemComponentProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  mobile?: boolean;
}

const SidebarItem: React.FC<SidebarItemComponentProps> = ({
  icon,
  label,
  href,
  onClick,
  mobile,
}) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    useEffect(() => {
      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };
  
      checkScreenSize();
  
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
  const path = usePathname();

  const isActive = (pathname: string) => {
    return pathname === path;
  };

  return (
    <Link
      onClick={onClick}
      href={href || "#"}
      className={`flex items-center gap-4 py-3 px-2 duration-300 ${
        href && isActive(href)
          ? "bg-white text-[#2B71F0] rounded-md"
          : "hover:bg-white hover:text-[#2B71F0] hover:rounded-md text-white"
      }`}
    >
      {icon}
      {(mobile || isLargeScreen) && (
        <p className="text-xl font-normal truncate">{label}</p>
      )}
    </Link>
  );
};

interface ModalProps {
  communityModalVisible: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  communityModalVisible,
  handleClose,
}) => {
  if (!communityModalVisible) {
    return null;
  }

  return createPortal(
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl py-24 space-y-6 px-20 text-center w-[30%] shadow-lg"
      >
        <LiaTelegramPlane
          size={100}
          className="bg-[#D0E0FC] rounded-full text-[#2B71F0] p-6 mx-auto mb-6"
        />

        <h2 className="text-2xl font-bold text-black">
          Join our WhatsApp Community
        </h2>
        <p className="text-gray-600 text-lg mx-auto">
          Get notified about the latest projects and hackathons.
        </p>

        <button className="bg-blue-600 text-white text-lg py-3 px-8 rounded-xl font-medium hover:bg-blue-700">
          Join
        </button>
      </div>
    </div>,
    document.body
  );
};
