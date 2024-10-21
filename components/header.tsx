'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/info", label: "Info" },
];

export function Header() {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const flipState = useRef<any>();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }


  return (
  <header className="header p-4 flex justify-between fixed top-0 left-0 right-0 z-10" ref={containerRef}>
    <nav className="pointer-events-auto w-fit">
      <ul className="flex gap-2 p-1 bg-black/10 dark:bg-white/10 rounded-full backdrop-blur-md">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <div className="relative px-2 py-1">
              {pathname === link.href && (
                <motion.div 
                  layoutId="indicator-background" 
                  ref={indicatorRef} 
                  className="w-full h-full absolute top-0 left-0 bg-white dark:bg-neutral-600 rounded-full z-[1]"
                  transition={{
                    type: "spring",
                    duration: 0.5,
                  }}
                ></motion.div>
              )}
              <motion.div className={`relative z-[2] ${pathname === link.href ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/70'}`}>{link.label}</motion.div>
              </div>  
            </Link>
          </li>
        ))}
    </ul>
    </nav>
    <div className="pointer-events-auto">
      <button className="text-black dark:text-white px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
    </header>
  );
}
