"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavItem from "./NavItem";
import Image from "next/image";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <Sheet  onOpenChange={() => setOpen(!open)} open={open}>
        <SheetTrigger >
          <Image
            src="/assets/icons/menu.svg"
            width={40}
            height={40}
            alt="menu"
            className="cursor-point object-contain"
          />
        </SheetTrigger>
        <SheetContent className="md:hidden">
          <NavItem onClick={() => setOpen(!open)} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
