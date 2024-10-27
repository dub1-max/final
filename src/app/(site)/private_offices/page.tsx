import Private_Offices from "@/components/Private_Offices";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Private Offices | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function PrivateOfficesPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Private_Offices />
        </div>
      </section>
    </>
  );
}
