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
    title: "Portfolio",
    href: "#portfolio",
    external: false,
    
  },
  {
    id: uuid(),
    title: "Locations",

    submenu: [
      {
        id: uuid(),
        title: "Go Biz",
        href: "/go_biz",
        external: false,
      },
      {
        id: uuid(),
        title: "Pro Box",
        href: "/pro_box",
        external: false,
      },
      {
        id: uuid(),
        title: "Biz Space",
        href: "/biz_space",
        external: false,
      },
      {
        id: uuid(),
        title: "Marina Pearl",
        href: "/marina_pearl",
        external: false,
      },
      {
        id: uuid(),
        title: "Connecting Minds",
        href: "/connecting_minds",
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
        title: "Cost Calc",
        href: "/support",
        external: false,
      },

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
        title: "Docs",
        href: "/docs",
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