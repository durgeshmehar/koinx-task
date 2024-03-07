import { Disclosure } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const navigation = [
  { name: "Crypto taxes", href: "#", current: false },
  { name: "Free Tools", href: "#", current: false },
  { name: "Resource Center", href: "#", current: false },
  { name: "Get Started", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-[30px] sm:mx-[60px] sm:px-0 lg:px-0">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center sm:items-stretch justify-between pl-4 sm:pl-0">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-10 w-auto"
                      src="/images/koinx.svg"
                      alt="Your Company"
                    />
                  </div>

                  <div className="hidden  sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-700 text-white "
                              : "text-gray-800 hover:bg-gray-200 hover:",
                            "rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sm:hidden inset-y-0 right-0 flex items-center sm:ml-6 sm:pr-0">
                  {/* Bar open close */}
                  <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 hover: focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* mobile options */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-8  pb-3 pt-2 flex flex-col">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-blue-700 text-white "
                        : "text-gray-800 hover:bg-gray-200 hover:",
                      "rounded-md px-3 py-2 text-sm font-semibold w-fit"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
