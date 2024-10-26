import GarhoudMain from "@/components/GarhoudMain"

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Garhoud | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function GarhoudMainPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <GarhoudMain />
        </div>
      </section>
    </>
  );
}
