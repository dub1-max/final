export default function FooterBottom() {
  return (
    <div className="dark:border-[#2E333D] md:border-t">
      <div className="-mx-4 flex flex-wrap py-5 md:py-7">
        <div className="w-full px-4 md:w-1/2 lg:w-2/3">
          <div className="mb-5 flex items-center justify-center space-x-5 border-b pb-5 dark:border-[#2E333D] md:mb-0 md:justify-start md:border-0 md:pb-0">
            <a
              href="#support"
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              Talk To An Expert
            </a>
            <a
              href="#support"
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#support"
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              Support
            </a>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div>
            <p className="text-center font-heading text-base text-dark-text lg:text-right">
              © {new Date().getFullYear()} <b>BusinessCentre. All rights reserved Managed by <a href="https://satcorp.ae " target="_blank" style={{color:"yellow"}}> SATCORP </a>   </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
