"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

/**
 *
 * Returns a function that checks if a given path is active.
 * The function compares the given path with the current pathname and returns a boolean value indicating whether the path is active or not.
 * https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/
 *
 * @returns {Function} A function that takes a path as a parameter and returns a boolean value indicating whether the path is active or not.
 */
export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}

export function Navbar() {
  const checkActivePath = useActivePath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-pink-300 text-[#db2777]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Emanuele Gurini</span>
            <svg
              width="100"
              height="35"
              viewBox="0 0 120 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_223_17)">
                <path
                  d="M14.0438 10.8867C13.9467 10.8867 13.8635 10.9214 13.7872 10.9978C13.7109 11.0742 13.6762 11.1575 13.6762 11.2547V12.3795C13.6762 12.4767 13.7109 12.56 13.7872 12.6364C13.8635 12.7128 13.9467 12.7475 14.0438 12.7475H30.4803C30.5774 12.7475 30.6606 12.7822 30.7369 12.8586C30.8132 12.9349 30.8478 13.0182 30.8478 13.1155V21.9054C30.8478 22.0026 30.8132 22.0859 30.7369 22.1623C30.6606 22.2386 30.5774 22.2734 30.4803 22.2734H14.0438C13.9467 22.2734 13.8635 22.3081 13.7872 22.3844C13.7109 22.4608 13.6762 22.5441 13.6762 22.6413V23.7869C13.6762 23.8841 13.7109 23.9675 13.7872 24.0438C13.8635 24.1202 13.9467 24.1549 14.0438 24.1549H31.2362C31.4789 24.1549 31.6038 24.266 31.6038 24.4951V34.6459C31.6038 34.7431 31.5691 34.8264 31.4928 34.9028C31.4165 34.9792 31.3333 35.0139 31.2362 35.0139H0.367566C0.270473 35.0139 0.187251 34.9792 0.110963 34.9028C0.0346761 34.8264 0 34.7431 0 34.6459V0.367983C0 0.27078 0.0346761 0.187463 0.110963 0.111089C0.187251 0.0347153 0.270473 0 0.367566 0H31.2362C31.3333 0 31.4165 0.0347153 31.4928 0.111089C31.5691 0.187463 31.6038 0.27078 31.6038 0.367983V10.5187C31.6038 10.6159 31.5691 10.6993 31.4928 10.7756C31.4165 10.852 31.3333 10.8867 31.2362 10.8867H14.0438Z"
                  fill="#DB2777"
                />
                <path
                  d="M77.2929 0C77.5565 0 77.6813 0.124975 77.6813 0.367983V34.6112C77.6813 34.875 77.5495 35 77.2929 35H64.3241C64.0814 35 63.9565 34.8681 63.9565 34.6112V25.2658C63.9565 25.0367 63.8456 24.9117 63.6306 24.8909C63.4156 24.8701 63.2699 24.9603 63.2006 25.1686L60.7386 34.7153C60.69 34.9097 60.5652 35.0069 60.371 35.0069H52.6452C52.451 35.0069 52.3262 34.9097 52.2776 34.7153L49.8156 25.2172C49.7532 25.0089 49.6076 24.9117 49.3856 24.9395C49.1637 24.9673 49.0597 25.0922 49.0597 25.3144V34.6112C49.0597 34.875 48.9279 35 48.6713 35H35.7025C35.4597 35 35.3349 34.8681 35.3349 34.6112V0.367983C35.3349 0.124975 35.4597 0 35.7025 0H51.279C51.4731 0 51.598 0.0902599 51.6465 0.27078L56.1336 16.1635C56.1822 16.344 56.307 16.4342 56.5012 16.4342C56.6954 16.4342 56.8202 16.344 56.8687 16.1635L61.3419 0.27078C61.3905 0.0902599 61.5153 0 61.7095 0H77.286H77.2929Z"
                  fill="#DB2777"
                />
                <path
                  d="M119.979 34.514C120.014 34.6251 119.993 34.7362 119.917 34.8403C119.841 34.9445 119.743 35 119.612 35H106.691C106.497 35 106.372 34.9097 106.324 34.7292L105.811 32.8268C105.762 32.6324 105.637 32.5352 105.443 32.5352H94.0346C93.8543 32.5352 93.7433 32.6324 93.6948 32.8268L93.1608 34.7292C93.1122 34.9097 93.0012 35 92.8209 35H79.8729C79.7411 35 79.644 34.9514 79.5816 34.8542C79.5192 34.757 79.4984 34.6459 79.5331 34.514L90.137 0.27078C90.1994 0.0902599 90.3243 0 90.5046 0H109.008C109.167 0 109.285 0.0902599 109.348 0.27078L119.979 34.514ZM102.183 22.5789C102.294 22.5789 102.392 22.5372 102.475 22.4469C102.558 22.3567 102.579 22.2456 102.551 22.1206L100.138 13.9417L100.11 13.7959C100.061 13.6154 99.9365 13.5251 99.7423 13.5251C99.562 13.5251 99.451 13.6154 99.4024 13.7959L99.3747 13.9417L96.9335 22.1206C96.8988 22.2525 96.9266 22.3636 97.0098 22.4469C97.093 22.5303 97.1901 22.5789 97.3011 22.5789H102.177H102.183Z"
                  fill="#DB2777"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#db2777]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6">
            Chi sono
          </Link>
          <Link href="/tutorial" className="text-sm font-semibold leading-6">
            Tutorial
          </Link>
          <Link href="/contatti" className="text-sm font-semibold leading-6">
            Contatti
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/*           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-pink-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Emanuele Gurini</span>
              <svg
                width="100"
                height="35"
                viewBox="0 0 120 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_223_17)">
                  <path
                    d="M14.0438 10.8867C13.9467 10.8867 13.8635 10.9214 13.7872 10.9978C13.7109 11.0742 13.6762 11.1575 13.6762 11.2547V12.3795C13.6762 12.4767 13.7109 12.56 13.7872 12.6364C13.8635 12.7128 13.9467 12.7475 14.0438 12.7475H30.4803C30.5774 12.7475 30.6606 12.7822 30.7369 12.8586C30.8132 12.9349 30.8478 13.0182 30.8478 13.1155V21.9054C30.8478 22.0026 30.8132 22.0859 30.7369 22.1623C30.6606 22.2386 30.5774 22.2734 30.4803 22.2734H14.0438C13.9467 22.2734 13.8635 22.3081 13.7872 22.3844C13.7109 22.4608 13.6762 22.5441 13.6762 22.6413V23.7869C13.6762 23.8841 13.7109 23.9675 13.7872 24.0438C13.8635 24.1202 13.9467 24.1549 14.0438 24.1549H31.2362C31.4789 24.1549 31.6038 24.266 31.6038 24.4951V34.6459C31.6038 34.7431 31.5691 34.8264 31.4928 34.9028C31.4165 34.9792 31.3333 35.0139 31.2362 35.0139H0.367566C0.270473 35.0139 0.187251 34.9792 0.110963 34.9028C0.0346761 34.8264 0 34.7431 0 34.6459V0.367983C0 0.27078 0.0346761 0.187463 0.110963 0.111089C0.187251 0.0347153 0.270473 0 0.367566 0H31.2362C31.3333 0 31.4165 0.0347153 31.4928 0.111089C31.5691 0.187463 31.6038 0.27078 31.6038 0.367983V10.5187C31.6038 10.6159 31.5691 10.6993 31.4928 10.7756C31.4165 10.852 31.3333 10.8867 31.2362 10.8867H14.0438Z"
                    fill="#DB2777"
                  />
                  <path
                    d="M77.2929 0C77.5565 0 77.6813 0.124975 77.6813 0.367983V34.6112C77.6813 34.875 77.5495 35 77.2929 35H64.3241C64.0814 35 63.9565 34.8681 63.9565 34.6112V25.2658C63.9565 25.0367 63.8456 24.9117 63.6306 24.8909C63.4156 24.8701 63.2699 24.9603 63.2006 25.1686L60.7386 34.7153C60.69 34.9097 60.5652 35.0069 60.371 35.0069H52.6452C52.451 35.0069 52.3262 34.9097 52.2776 34.7153L49.8156 25.2172C49.7532 25.0089 49.6076 24.9117 49.3856 24.9395C49.1637 24.9673 49.0597 25.0922 49.0597 25.3144V34.6112C49.0597 34.875 48.9279 35 48.6713 35H35.7025C35.4597 35 35.3349 34.8681 35.3349 34.6112V0.367983C35.3349 0.124975 35.4597 0 35.7025 0H51.279C51.4731 0 51.598 0.0902599 51.6465 0.27078L56.1336 16.1635C56.1822 16.344 56.307 16.4342 56.5012 16.4342C56.6954 16.4342 56.8202 16.344 56.8687 16.1635L61.3419 0.27078C61.3905 0.0902599 61.5153 0 61.7095 0H77.286H77.2929Z"
                    fill="#DB2777"
                  />
                  <path
                    d="M119.979 34.514C120.014 34.6251 119.993 34.7362 119.917 34.8403C119.841 34.9445 119.743 35 119.612 35H106.691C106.497 35 106.372 34.9097 106.324 34.7292L105.811 32.8268C105.762 32.6324 105.637 32.5352 105.443 32.5352H94.0346C93.8543 32.5352 93.7433 32.6324 93.6948 32.8268L93.1608 34.7292C93.1122 34.9097 93.0012 35 92.8209 35H79.8729C79.7411 35 79.644 34.9514 79.5816 34.8542C79.5192 34.757 79.4984 34.6459 79.5331 34.514L90.137 0.27078C90.1994 0.0902599 90.3243 0 90.5046 0H109.008C109.167 0 109.285 0.0902599 109.348 0.27078L119.979 34.514ZM102.183 22.5789C102.294 22.5789 102.392 22.5372 102.475 22.4469C102.558 22.3567 102.579 22.2456 102.551 22.1206L100.138 13.9417L100.11 13.7959C100.061 13.6154 99.9365 13.5251 99.7423 13.5251C99.562 13.5251 99.451 13.6154 99.4024 13.7959L99.3747 13.9417L96.9335 22.1206C96.8988 22.2525 96.9266 22.3636 97.0098 22.4469C97.093 22.5303 97.1901 22.5789 97.3011 22.5789H102.177H102.183Z"
                    fill="#DB2777"
                  />
                </g>
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#db2777]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-[#db2777]">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-pink-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-pink-200"
                >
                  Chi sono
                </Link>
                <Link
                  href="/tutorial"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-pink-200"
                >
                  Tutorial
                </Link>
                <Link
                  href="/contatti"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-pink-200"
                >
                  Contatti
                </Link>
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
