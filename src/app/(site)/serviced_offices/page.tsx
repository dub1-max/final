import Serviced_Offices from "@/components/Serviced_Offices";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Serviced Offices | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ServicedOfficesPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Serviced_Offices />
        </div>
      </section>
    </>
  );
}
