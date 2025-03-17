import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Amenities",
    href: "#features",
    external: false,
  },
  {
    id: uuid(),
    title: "AboutUs",
    href: "#about",
    external: false,
  },
  {
    id: uuid(),
    title: "Gallery",
    href: "#portfolio",
    external: false,
  }/*,,
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
        title: "Support",
        href: "#support",
        external: false,
      },
      {
        id: uuid(),
        title: "Cost Calc",
        href: "/support",
        external: false,
      }
    ],
  },*/
  ,
  {
    id: uuid(),
    title: "Locations",

    submenu: [
      {
        id: uuid(),
        title: "Garhoud",
        href: "/garhoud-main",
        external: false,
      },
      {
        id: uuid(),
        title: "Deira",
        href: "/deira-main",
        external: false,
      },
      {
        id: uuid(),
        title: "SheikhZayed",
        href: "/sheikhzayedmain",
        external: false,
      }
    ]
  },
  {
    id: uuid(),
    title: "CoWorking",
    href: "/coworking",
    external: true,
  // },

  // {
  //   id: uuid(),
  //   title: "MeetingRooms",
  //   href: "/meetroom_main",
  //   external: true,
    }
  ,

  {
    id: uuid(),
    title: "Offices",

    submenu: [
      {
        id: uuid(),
        title: "Private Offices",
        href: "/private_offices",
        external: false,
      },
      {
        id: uuid(),
        title: "Smart Cabins",
        href: "/smart_cabins",
        external: false,
      },
      {
        id: uuid(),
        title: "Serviced Office",
        href: "/serviced_offices",
        external: false,
      },
     
    ]
  },
  

 /* {
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
    
  },*/
   
 /* {
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
      }, 
    ],
  }, */
  
];
