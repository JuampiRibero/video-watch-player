"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useLanguage from "@/hooks/useLanguage";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, SquarePlayIcon } from "lucide-react";

const Navbar: FC = () => {  
  const { isEnglish } = useLanguage();
  const pathname = usePathname();

  const menuList = [
    {
      id: 1,
      title: isEnglish ? "HOME" : "INICIO",
      href: "/",
    },
    {
      id: 2,
      title: isEnglish ? "ABOUT US" : "SOBRE NOSOTROS",
      href: "/about",
    },
    {
      id: 3,
      title: isEnglish ? "CONTACT" : "CONTACTO",
      href: "/contact",
    },
  ];

  return (
    <header className="w-full bg-background shadow-md mb-10">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 px-4"
          prefetch={false}
        >
          <SquarePlayIcon className="h-6 w-6" />
          <span className="text-lg font-bold">{isEnglish ? "Video Watch Player" : "Reproductor de Video"}</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              {menuList.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  prefetch={false}
                  className={`link ${pathname === item.href ? "active" : ""}`}
                  passHref
                  legacyBehavior
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="pt-20 md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {menuList.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      prefetch={false}
                      className={`link ${
                        pathname === item.href ? "active" : ""
                      }`}
                      legacyBehavior
                    >
                      <SheetFooter>
                        <SheetClose asChild>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        </SheetClose>
                      </SheetFooter>
                    </Link>
                  ))}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
