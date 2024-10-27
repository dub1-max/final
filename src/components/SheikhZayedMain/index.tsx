import React from "react";
import Link from "next/link";
import './style.css'

export default function SheikhZayedMain() {
  return (
    <div style={{ marginTop: "45px" }}>
      <div className="flex flex-wrap items-center justify-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
        <div className="w-full px-4 text-center lg:w-1/2">
          <div className="relative mx-auto mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
            <span className="title left-0 !translate-x-0">SHEIKH ZAYED </span>
            <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Sheikh Zayed
            </h2>
          </div>
        </div>
      </div>
      <br /><br />

      <div className="font-sans flex flex-col items-center py-0" >
        <div className="grid justify-center gap-20 md:grid-cols-2" style={{width:900,height:610}}>
          {/* Blog Card 1 */}
          <div className="mx-auto transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 " style={{ boxShadow:
              "0 8px 20px 0px rgba(0, 48, 241, 0.5), 0 8px 40px 0px rgba(5, 230, 238, 0.5)"}}>
            <img
              className="h-49 w-49 object-cover rounded-t-lg"
              src="https://i.postimg.cc/fbxfQChM/connecting-minds.jpg"
              alt="Blog 1"
            />
            <div className="p-6 rounded-b-lg bg-white dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-400">
                Connecting Minds
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Enjoy the sunlight in this calm spot and come up with a new brilliant idea for your business.
              </p>
              <Link href="" className="rounded bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-blue-400">
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="mx-auto transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" style={{ boxShadow:
              "0 8px 20px 0px rgba(0, 48, 241, 0.5), 0 8px 40px 0px rgba(5, 230, 238, 0.5)"}}>
            <img
              className="h-49 w-49 object-cover rounded-t-lg"
              src="https://i.postimg.cc/fbxfQChM/connecting-minds.jpg"
              alt="Blog 2"
            />
            <div className="p-6 rounded-b-lg bg-white dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-400">
                Pro Box
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Enjoy the sunlight in this calm spot and come up with a new brilliant idea for your business.
              </p>
              <Link href="" className="rounded bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-blue-400">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
