import SheikhZayedMain from "@/components/SheikhZayedMain"

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Sheikh Zayed | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function SheikhZayedMainPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <SheikhZayedMain />
        </div>
      </section>
    </>
  );
}
