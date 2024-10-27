import Marina_pearl from "@/components/Marina_pearl";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Marina Pearl | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MarinaPearlPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Marina_pearl />
        </div>
      </section>
    </>
  );
}
