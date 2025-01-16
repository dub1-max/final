import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

export default function Brands() {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <div className="px-4 xl:container">
        {/* Section Title */}
        <SectionTitle
          title="Trusted by Global Brands"
          paragraph="Our services have earned the trust of some of the top global brands, ensuring quality, reliability, and exceptional performance."
        />

        {/* Brand Logos */}
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {/* First Brand */}
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    src="./images/brands/uideck.svg"
                    alt="UIDeck"
                    className="hidden h-10 w-full dark:block"
                  />
                  <Image
                    src="./images/brands/uideck-2.svg"
                    alt="UIDeck"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                {/* Second Brand */}
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    src="./images/brands/tailadmin.svg"
                    alt="TailAdmin"
                    className="hidden h-10 w-full dark:block"
                  />
                  <Image
                    src="./images/brands/tailadmin-2.svg"
                    alt="TailAdmin"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                {/* Third Brand */}
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    src="./images/brands/graygrids.svg"
                    alt="GrayGrids"
                    className="hidden h-10 w-full dark:block"
                  />
                  <Image
                    src="./images/brands/graygrids-2.svg"
                    alt="GrayGrids"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                {/* Fourth Brand */}
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    src="./images/brands/lineicons.svg"
                    alt="LineIcons"
                    className="hidden h-10 w-full dark:block"
                  />
                  <Image
                    src="./images/brands/lineicons-2.svg"
                    alt="LineIcons"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                {/* Fifth Brand */}
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    src="./images/brands/plainadmin.svg"
                    alt="PlainAdmin"
                    className="hidden h-10 w-full dark:block"
                  />
                  <Image
                    src="./images/brands/plainadmin-2.svg"
                    alt="PlainAdmin"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
