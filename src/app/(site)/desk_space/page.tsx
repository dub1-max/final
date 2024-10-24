import Desk_Space from "@/components/Desk_Space";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Desk Space | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function DeskSpacePage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Desk_Space />
        </div>
      </section>
    </>
  );
}
