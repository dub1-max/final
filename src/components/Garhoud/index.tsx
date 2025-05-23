export default function Garhoud() {
  return (
    <section id="support" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="flex flex-wrap items-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title !left-0 !translate-x-0"> Connecting Minds </span>
                  <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Connecting Minds
                  </h2>
                </div>
              </div>
              <div className="mt-12 w-full px-4">
                <h3 className="mb-6 font-heading text-base text-dark dark:text-white sm:text-xl">
                  Find Us Here
                </h3>
              </div>
            </div>

            {/* Flexbox container for the two divs */}
            <div className="w-full flex px-1 lg:w-1/2 justify-between space-x-2">

              <div className="w-1/2 flex flex-nowrap border border-black">
                {/* Content for first div */}
              </div>
              <div className="w-1/2 flex flex-nowrap border border-black">
                {/* Content for second div */}
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              style={{
                width: "100%",
                height: "60vh",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(51, 46, 61, 0.9)",
                overflow: "hidden",
                marginTop: "2rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.554100745289!2d55.34305767603425!3d25.251939329479967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2b5f33ac7f%3A0xe59c3bea5bf9fa90!2sConnecting%20Minds%20Business%20Center%20LLC!5e0!3m2!1sen!2sin!4v1728818825985!5m2!1sen!2sin"
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <br />
            <div className="flex flex-wrap items-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title !left-0 !translate-x-0"> Pro Box </span>
                  <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Pro Box
                  </h2>
                </div>
              </div>
              <div className="mt-12 w-full px-4">
                <h3 className="mb-6 font-heading text-base text-dark dark:text-white sm:text-xl">
                  Find Us Here
                </h3>
              </div>
            </div>

            {/* Second Google Maps embed */}
            <div
              style={{
                width: "100%",
                height: "60vh",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(51, 46, 61, 0.9)",
                overflow: "hidden",
                marginTop: "2rem",
              }}
            >
              <iframe
                // Replace with the URL for your second map location
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.1829708639!2d54.734569013372756!3d25.070058956600107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1d3952d687%3A0x7d5552441e4521d6!2sGO%2BIZ%20BUSINESS%20CENTER!5e0!3m2!1sen!2sin!4v1728818638029!5m2!1sen!2sin"
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="-mx-4 flex flex-wrap pt-12">
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2 font-heading text-base text-dark dark:text-white sm:text-xl">
                    Email Address
                  </h3>
                  <p className="text-base font-medium text-dark-text">
                    support@startup.com
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2 font-heading text-base text-dark dark:text-white sm:text-xl">
                    Phone Number
                  </h3>
                  <p className="text-base font-medium text-dark-text">
                    +971 4 294 8466
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2 font-heading text-base text-dark dark:text-white sm:text-xl">
                    Office Location
                  </h3>
                  <p className="text-base font-medium text-dark-text">
                    Entrance 01 - Office #101 - Salah Al Din St - Al Khabaisi -
                    Dubai - United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6 flex items-center space-x-5 lg:justify-end">
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    {/* Replace the SVG content with a proper icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    {/* Replace the SVG content with a proper icon */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    {/* Replace the SVG content with a proper icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      

                      <path d="M7.443 5.34961C8.082 5.34961 8.673 5.39961 9.213 5.54761C9.70302 5.63765 10.1708 5.82244 10.59 6.09161C10.984 6.33861 11.279 6.68561 11.475 7.13061C11.672 7.57561 11.77 8.12061 11.77 8.71361C11.77 9.40661 11.623 9.99961 11.279 10.4446C10.984 10.8906 10.492 11.2856 9.902 11.5826C10.738 11.8306 11.377 12.2756 11.77 12.8686C12.164 13.4626 12.41 14.2046 12.41 15.0456C12.41 15.7386 12.262 16.3316 12.016 16.8266C11.77 17.3216 11.377 17.7666 10.934 18.0636C10.4528 18.382 9.92084 18.616 9.361 18.7556C8.771 18.9046 8.181 19.0036 7.591 19.0036H1V5.34961H7.443ZM7.049 10.8896C7.59 10.8896 8.033 10.7416 8.377 10.4946C8.721 10.2476 8.869 9.80161 8.869 9.25761C8.869 8.96061 8.819 8.66361 8.721 8.46661C8.623 8.26861 8.475 8.11961 8.279 7.97161C8.082 7.87261 7.885 7.77361 7.639 7.72461C7.393 7.67461 7.148 7.67461 6.852 7.67461H4V10.8906H7.05L7.049 10.8896ZM7.197 16.7276C7.492 16.7276 7.787 16.6776 8.033 16.6286C8.28138 16.5814 8.51628 16.48 8.721 16.3316C8.92139 16.1868 9.08903 16.0015 9.213 15.7876C9.311 15.5406 9.41 15.2436 9.41 14.8976C9.41 14.2046 9.213 13.7096 8.82 13.3636C8.426 13.0666 7.885 12.9186 7.246 12.9186H4V16.7286H7.197V16.7276ZM16.689 16.6776C17.082 17.0736 17.672 17.2716 18.459 17.2716C19 17.2716 19.492 17.1236 19.885 16.8766C20.279 16.5796 20.525 16.2826 20.623 15.9856H23.033C22.639 17.1726 22.049 18.0136 21.263 18.5576C20.475 19.0526 19.541 19.3496 18.41 19.3496C17.6864 19.3518 16.9688 19.2175 16.295 18.9536C15.6887 18.7262 15.148 18.3524 14.721 17.8656C14.2643 17.4102 13.9267 16.8494 13.738 16.2326C13.492 15.5896 13.393 14.8976 13.393 14.1056C13.393 13.3636 13.492 12.6716 13.738 12.0276C13.9745 11.4077 14.3245 10.8373 14.77 10.3456C15.213 9.90061 15.754 9.50561 16.344 9.25761C17.0007 8.99367 17.7022 8.8592 18.41 8.86161C19.246 8.86161 19.984 9.01061 20.623 9.35661C21.263 9.70261 21.754 10.0986 22.148 10.6926C22.5499 11.2631 22.8494 11.8993 23.033 12.5726C23.131 13.2646 23.18 13.9576 23.131 14.7486H16C16 15.5406 16.295 16.2826 16.689 16.6786V16.6776ZM19.787 11.4836C19.443 11.1376 18.902 10.9396 18.262 10.9396C17.82 10.9396 17.475 11.0386 17.18 11.1866C16.885 11.3356 16.689 11.5336 16.492 11.7316C16.311 11.9229 16.1912 12.1638 16.148 12.4236C16.098 12.6716 16.049 12.8686 16.049 13.0666H20.475C20.377 12.3246 20.131 11.8306 19.787 11.4836ZM15.459 6.28961H20.967V7.62561H15.46V6.28961H15.459Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0 8px 20px 0px rgba(0, 48, 241, 0.5), 0 8px 40px 0px rgba(5, 230, 238, 0.5)",
            borderRadius: "5px",
          }}
        >
          <div className="mx-auto max-w-[780px] px-4 pt-[130px] sm:px-6 lg:px-8">
            <form
              className="w-full" // Ensures the form takes full width of the container
              action="https://formbold.com/s/60p4z"
              method="POST"
            >
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="name"
                      className="mb-3 block font-heading text-base text-dark dark:text-white"
                    >
                      {" "}
                      Your Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="email"
                      className="mb-3 block font-heading text-base text-dark dark:text-white"
                    >
                      {" "}
                      Email Address{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="phone"
                      className="mb-3 block font-heading text-base text-dark dark:text-white"
                    >
                      {" "}
                      Phone Number{" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="subject"
                      className="mb-3 block font-heading text-base text-dark dark:text-white"
                    >
                      {" "}
                      Subject{" "}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Type Subject"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-10">
                    <label
                      htmlFor="message"
                      className="mb-3 block font-heading text-base text-dark dark:text-white"
                    >
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Type Message"
                      className="w-full resize-none border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-12">
                    <label
                      htmlFor="supportCheckbox"
                      className="flex cursor-pointer select-none text-dark-text hover:text-primary"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="supportCheckbox"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border dark:border-[#414652]">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              className="stroke-current"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                strokeWidth="0.4"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      I have read the terms of the Service & I accept Privacy
                      Policy
                    </label>
                  </div>
                </div>

                <div className="w-full px-4">
                  <button className="flex w-full items-center justify-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}
