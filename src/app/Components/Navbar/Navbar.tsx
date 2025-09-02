import React, { useState } from "react";
import "@/app/Components/Navbar/Navbar.scss";

type Props = object;

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-body">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-medium">FarmBros</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button>Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              // variant="ghost"
              // size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Button
            </button>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            // variant="ghost"
            // size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Button Close
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="hidden-navigation">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
            <a
              href="#home"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <button className="w-full">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
