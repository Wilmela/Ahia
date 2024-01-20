"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center pt-10 md:pt-0 md:items-start md:flex-row gap-5">
        {navLinks.map((link) => {
          const isActive = link.url === pathname;
          return (
            <li
              key={link.title}
              className={cn(
                "hover:underline hover:transition-all duration-300 ease-in",
                {
                  "text-orange-600": isActive,
                }
              )}
              onClick={onClick}
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItem;
