"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { websiteLinks } from "@/constants";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              alt="logo"
              className=""
            />
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex w-full flex-col justify-center py-16">
                {websiteLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "mb-4 font-semibold text-gray-400 hover:text-primary",
                          { "text-primary": isActive }
                        )}
                      >
                        <p>{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="flex w-full flex-col justify-end gap-2">
                  <Link href="/login">
                    <Button className="bg-primary h-12 w-20 font-medium">
                      Login
                    </Button>
                  </Link>
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
