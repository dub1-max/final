import Connecting_Minds from "@/components/Connecting_Minds";
import Felxi_Desk from "@/components/Flexi_Desk";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Connecting Minds | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function ConnectingMindsPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Connecting_Minds />
        </div>
      </section>
    </>
  );
}
