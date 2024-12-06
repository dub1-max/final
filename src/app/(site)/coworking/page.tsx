import CoworkingMain from "@/components/CoworkingMain"

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Coworking | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function DeiraMainPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <CoworkingMain />
        </div>
      </section>
    </>
  );
}
