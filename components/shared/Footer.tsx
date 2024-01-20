"use client";

import Wrapper from "./Wrapper";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-APP_BLUE">
      <Wrapper className="p-5 flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <p className="text-white">&copy;2024 AHIA. All rights reserved.</p>

        <nav>
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = link.url === pathname;
              return (
                <li
                  key={link.title}
                  className={cn(
                    "hover:underline hover:transition-all duration-300 ease-in text-white",
                    {
                      "text-orange-600": isActive,
                    }
                  )}
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Wrapper>
    </footer>
  );
};

export default Footer;
