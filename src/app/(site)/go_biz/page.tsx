import Go_Biz from "@/components/Go_Biz"
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Go Biz | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function GoBizPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Go_Biz />
        </div>
      </section>
    </>
  );
}
