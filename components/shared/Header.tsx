import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import { Store, Bell } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex items-center border-b sticky top-0 inset-x-0 z-50 bg-white">
      <Wrapper className="flex justify-between items-center w-full ">
        <Link href="/" className="flex font-[700] text-2xl items-center gap-2">
          <Store className="text-APP_LIGHT_GREEN" />

          <div className="flex">
            <p className="text-APP_ORANGE">A</p>
            <p className="text-APP_YELLOW">H</p>
            <p className="text-APP_BLUE">I</p>
            <p className="text-APP_DARK_GREEN">A</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex">
          <NavItem />
        </div>

        <div className="flex gap-2 items-center">
          <SignedOut>
            <Button asChild size="lg" className="btn">
              <Link href="/sign-in">Sign-In</Link>
            </Button>
          </SignedOut>

          <Link
            href="/sell"
            className="flex justify-center gap-2 bg-APP_BLUE/10 text-APP_BLUE py-3 px-6 rounded-full w-16 hover:bg-APP_BLUE hover:text-white ease-in duration-300"
          >
            <p className="font-[600]">Sell</p>
          </Link>
          <SignedIn>
            <div className="flex gap-2">
              <Bell className="text-red-400" />
              <UserButton />
            </div>
          </SignedIn>
          {/* MOBILE NAV */}
          <MobileNav />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
