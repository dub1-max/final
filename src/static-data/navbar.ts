import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Features",
    href: "#features",
    external: false,
  },
  {
    id: uuid(),
    title: "About Us",
    href: "#about",
    external: false,
  },
  {
    id: uuid(),
    title: "Pricing",
    href: "#pricing",
    external: false,
  },

  {
    id: uuid(),
    title: "Locations",

    submenu: [
      {
        id: uuid(),
        title: "Go Biz",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Pro Box",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Biz Space",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Marina pearl",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Connecting minds",
        href: "/support",
        external: false,
      },
    ]
  },

  {
    id: uuid(),
    title: "Portfolio",
    submenu: [
      {
        id: uuid(),
        title: "Gallery",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Business Centers",
        href: "/docs",
        external: false,
      },

    ]
    
  },
  {
    id: uuid(),
    title: "Gallery",
    
    submenu: [
      {
        id: uuid(),
        title: "Services Offered",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Locations",
        href: "/docs",
        external: false,
      },
      {
        id: uuid(),
        title: "Support",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Cost Calc",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Locations",
        href: "/support",
        external: false,
      }
    ],
  },
  {
    id: uuid(),
    title: "Pages",
    submenu: [
      {
        id: uuid(),
        title: "Home",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Docs",
        href: "/docs",
        external: false,
      },
      {
        id: uuid(),
        title: "Support",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Blog",
        href: "/blog",
        external: false,
      },/**
      {
        id: uuid(),
        title: "Sign in",
        href: "/auth/signin",
        external: false,
      },
      {
        id: uuid(),
        title: "Sign up",
        href: "/auth/signup",
        external: false,
      },
      {
        id: uuid(),
        title: "Error 404",
        href: "/error",
        external: false,
      }, */
    ],
  },
  
];
