import Pro_Box from "@/components/Pro_Box";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Pro Box | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Pro_Box />
        </div>
      </section>
    </>
  );
}
