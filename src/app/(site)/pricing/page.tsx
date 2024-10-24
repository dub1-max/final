import Pricing from "@/components/Pricing";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Pricing | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Pricing />
        </div>
      </section>
    </>
  );
}
