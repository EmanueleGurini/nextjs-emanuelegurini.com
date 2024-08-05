"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "chi sono",
  },
  //"/blog": { name: "blog", },
  "/tutorial": {
    name: "tutorial",
  },
  "/contatti": {
    name: "contatti",
  },
};

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
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 ${
                    checkActivePath(path) && "underline"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
