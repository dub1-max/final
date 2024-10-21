import Smart_Cabins from "@/components/Smart_Cabins";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Smart Cabins | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Smart_Cabins />
        </div>
      </section>
    </>
  );
}
