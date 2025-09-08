"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/About" },
  { name: "Work", to: "/Work" },
  { name: "Services", to: "/Services" },
  { name: "Contact", to: "/Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          {Links.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              className={`${
                pathname === link.to 
                  ? "text-accent border-b-2 border-accent" 
                  : "text-white hover:text-accent"
              } capitalize font-medium transition-all duration-300 pb-1 relative`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;