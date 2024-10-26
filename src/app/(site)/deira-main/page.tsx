import DeiraMain from "@/components/DeiraMain"

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Deira | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function DeiraMainPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <DeiraMain />
        </div>
      </section>
    </>
  );
}
