import Deira from "@/components/Deira";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Deira | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function DeiraPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Deira />
        </div>
      </section>
    </>
  );
}
