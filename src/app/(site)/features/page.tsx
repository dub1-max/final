import Features from "@/components/Home/Features";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Features | ${siteName}`,
  description: "This is Support page",
  // other metadata
  // feature component is only for testing purpose
};

export default function SupportPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Features />
        </div>
      </section>
    </>
  );
}
