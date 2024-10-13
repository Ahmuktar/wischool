"use client";

import Image from "next/image";
import Link from "next/link";
import { websiteLinks } from "@/constants";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto pr-2">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/logo.png"
                      width={200}
                      height={200}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="hidden w-auto lg:block">
                <div className="flex items-center gap-10">
                  {websiteLinks.map((link) => {
                    const isActive = pathname === link.route;
                    return (
                      <Link
                        key={link.label}
                        href={link.route}
                        className={cn(
                          "font-semibold text-gray hover:text-primary",
                          { "text-primary": isActive }
                        )}
                      >
                        <p>{link.label}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="hidden w-auto lg:block">
                  <div className="flex items-center gap-10">
                    <Search className="text-red-900" />
                    <Link href="/login">
                      <Button className="bg-primary h-12 w-20 font-medium">
                        Login
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="w-auto lg:hidden">
                  <MobileNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
