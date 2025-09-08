  "use client";

  import Link from "next/link";
  import { Button } from "./button";
  import Nav from "../Nav";
  import Mobilenav from "./Mobilenav";
  import { audiowide } from "@/lib/fonts"; // import the font

  const Header = () => {
    // Smooth scroll function
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
      <header className="py-8 xl:py-12 text-white bg-pink-50/20 fixed top-0 left-0 right-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="cursor-pointer"
          >
            <h1 className={`${audiowide.className} text-4xl font-semibold hover:text-cyan-400 transition-colors`}>
              Zeyad Nafea<span className="text-accent">.</span>
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block xl:flex items-center gap-8">
            <nav className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="block md:hidden">
            <Mobilenav />
          </div>

        </div>
      </header>
    );
  };

  export default Header;