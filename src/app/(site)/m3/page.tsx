import M3_Portfolio from "@/components/Home/M3_Portfolio";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Flexi Desk | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function FlexiDeskPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <M3_Portfolio/>
        </div>
      </section>
    </>
  );
}
