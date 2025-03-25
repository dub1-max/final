import Pro_Box from "@/components/Pro_Box";
import CarouselProBox from "@/components/CarouselProBox";
import { Metadata } from "next";
import Support from "@/components/Support";
import calConfig from "@/static-data/calConfig";
import Calendar from "@/components/Calender";
import AboutPB from "@/components/AboutPB";
import mapConfig from "@/static-data/mapConfig";
import Maps from "@/components/Maps";
import Carousel_UI from "@/components/ui/carousel";

const siteName = process.env.SITE_NAME;
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://ucaa6706fc452e14920f58e7e9fb.previews.dropboxusercontent.com/p/thumb/ACl25JCMIAd-CrE5Blk3EdXQeuIYh4cjK_S32HlTs2GWeJR3acGc3QJvYQJBcu-m8WpvSmYFRUzQxwmEtZjvlrFpTg-GtZ9i4EDq4dgdqKmZl6BdPIrFhUpO0UAKBnjwflWq4z5oB8wTmJjmfht870B6GZEk_g79IloeyRk4TFY07G8Lj1XwI6I4lIQCCl6w-n_ZEPSdjqzqDWmLHUT_IeUq3JH29ZlguwMZ7tGRQgDcW7rcJMwiq4ZX9u1puLAhV7X_o0jRR8v79hqIBFPktweNeNm0x9vtm7QrmmykOqa2QpTLhwVBzTqNIbddD5ItIAfIw4q-PflKoTwDFTxBiUpgTaFB8qYStY4rAWTtk5cnl81QtlYESSkXju9C7Wd-jH9TEw8V-pIV5Q_-_u5wd0k6UlNZaDLq0YyZzqzrlx4IUx-5fTj4l1BstF_t1k_SLjuvffyy16GvGxQI2YO0zAktq7Jyr3Tr0yoOY98Ryifyajh2n2MSmtc7d4agVNg46WUvvwh1WMyXiO2-mlXfms19/p.jpeg",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const metadata: Metadata = {
  title: `Pro Box | ${siteName}`,
  description: "This is Support page",
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Carousel_UI slides={slideData} />
          <AboutPB />
          <Pro_Box />
          <Maps googleMapUrl={mapConfig.probox_map} />
          {/* <Calendar /> */}
          <Support />
        </div>
      </section>
    </>
  );
}
