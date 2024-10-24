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
  }/*,
  {
    id: uuid(),
    title: "Pricing",
    href: "#pricing",
    external: false,
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
    title: "Garhoud",

    submenu: [
      {
        id: uuid(),
        title: "Connecting Minds",
        href: "/connecting_minds",
        external: false,
      },
      {
        id: uuid(),
        title: "Pro Box",
        href: "/pro_box",
        external: false,
      }
    ]
  },
  {
    id: uuid(),
    title: "Deira",

    submenu: [
      {
        id: uuid(),
        title: "Go Biz",
        href: "/go_biz",
        external: false,
      },
      {
        id: uuid(),
        title: "Biz Space",
        href: "/biz_space",
        external: false,
      }
    ]
  },
  {
    id: uuid(),
    title: "SheikhZayed",

    submenu: [
      {
        id: uuid(),
        title: "Marina Pearl",
        href: "/marina_pearl",
        external: false,
      }/*,
      {
        id: uuid(),
        title: "Deira",
        href: "/deira",
        external: false,
      },
      {
        id: uuid(),
        title: "Sheikh Zayed",
        href: "/marina_pearl",
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
      },*/
    ]
  },
  {
    id: uuid(),
    title: "CoWorking",

    submenu: [
      {
        id: uuid(),
        title: "Flexi Desk",
        href: "/flexi_desk",
        external: false,
      },
      {
        id: uuid(),
        title: "Desk Space",
        href: "/desk_space",
        external: false,
      }
    ]
  },
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
  {
    id: uuid(),
    title: "MeetingRooms",

    submenu: [
      {
        id: uuid(),
        title: "Meet1",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Meet2",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Meet3",
        href: "/",
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
