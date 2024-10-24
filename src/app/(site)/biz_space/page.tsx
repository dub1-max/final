import Biz_Space from "@/components/Biz_Space";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Biz Space | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function BizSpacePage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Biz_Space />
        </div>
      </section>
    </>
  );
}
