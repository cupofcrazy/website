'use client'

import Link from "next/link";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";

const links = [
  {
    href: '/',
    label: 'Home',
    background: 'linear-gradient(180deg, #F5F9F0 0%, #A4FF30 50%, #FBFFF6 100%)'
  },
  {
    href: '/works',
    label: 'Works',
    background: 'linear-gradient(180deg, #f2fbff 0%, #0cd3ff 50%, #f2fbff 100%)'
  },
]

export function Nav() {
  const pathname = usePathname();
  


  return (
    <nav className="fixed bottom-0 z-50 left-0 w-full py-4 flex items-center justify-center">
      <div 
        style={{
          background: 'linear-gradient(180deg, #ffffff10 0%, #00000021 50%, #ffffff10 100%)'
        }}
        className="flex items-center justify-center p-1 rounded-full border border-black/5 backdrop-blur-md">
        {links.map((link) => (
          <Link className="relative" key={link.href} href={link.href}>
            <motion.div className="relative z-[2] text-white px-4 py-1.5 mix-blend-difference">
              {link.label}
            </motion.div>
            {pathname === link.href && <motion.div
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{
                background: link.background
              }}
            layoutId="underline" className="absolute inset-0 z-[1] rounded-full w-full border border-black/10" />}
          </Link>
        ))}
      </div>
    </nav>
  )
}