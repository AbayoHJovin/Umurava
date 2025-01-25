"use client";
import { navbarLinks } from "@/constants/navBarLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { Drawer, List, ListItem } from "@mui/material";
import workSans from "@/fonts/fonts";

interface NavbarProps {
  currentPage: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 xmd:px-10 llg:px-36 bg-white mt-5  text-black sticky top-0 z-50 backdrop-blur-2xl ${workSans.className}`}
    >
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Logo"
          className="rounded-full"
        />
      </div>

      <div className="hidden xmd:flex space-x-2 xmd:space-x-5 items-center justify-center text-black">
        {navbarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`hover:text-blue-600 ${
              currentPage == link.label ? "text-blue-600" : "text-black"
            } cursor-pointer`}
          >
            <span className="text-xs xmd:text-lg">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="hidden xmd:flex">
        <button className="bg-gray-900 text-white py-2 px-4 rounded-md">
          Join the Program
        </button>
      </div>

      <AiOutlineMenu
        onClick={toggleDrawer(true)}
        className="xmd:hidden cursor-pointer text-black "
      />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: "75%",
            padding: "20px",
            backgroundColor: "white",
            boxShadow: "none",
          },
        }}
      >
        <div className="flex justify-end">
          <CgClose
            onClick={toggleDrawer(false)}
            className="text-2xl font-bold cursor-pointer  text-black"
          />
        </div>
        <List>
          {navbarLinks.map((link, index) => (
            <ListItem key={index} button>
              <Link
                href={link.href}
                className={`text-lg ${
                  currentPage == link.label ? "text-blue-600" : "text-black"
                }  w-full`}
              >
                {link.label}
              </Link>
            </ListItem>
          ))}
          <ListItem>
            <button className="bg-gray-900 text-white py-2 px-4 rounded-md w-full">
              Join the Program
            </button>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
}
