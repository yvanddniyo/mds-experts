"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NavLinkProps } from "@/type"
import { NAV_LINKS } from "@/constants/Info"
import { useScroll } from "@/Hooks/useScroll"
import mdsExpert from "@/assets/MDS-White.png"
import { Menu, X } from "lucide-react"
import { smoothScrollTo, scrollToTop } from "@/lib/smoothScroll"



const NavLink = ({ href, label, scroll, isActive = false, onClick }: NavLinkProps) => (
  <button
    onClick={onClick}
    className={`relative ${scroll ? "text-gray-600" : "text-white"} px-4 py-2 text-sm font-medium transition-all duration-200 group ${
      scroll ? "text-gray-600" : "text-white"
    }`}
  >
    <span className="block relative">
      {label}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
        isActive ? "w-full" : ""
      }`}></span>
    </span>
  </button>
)

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const { isScrolled } = useScroll()
 

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setIsMobileMenuOpen(false)
    
    // Handle smooth scrolling
    if (href === "#home") {
      scrollToTop()
    } else {
      const elementId = href.replace("#", "")
      smoothScrollTo(elementId)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md"
          : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative w-24 h-24 z-50">
              <Image
                src={mdsExpert}
                alt="MDS Experts Logo"
                fill
                className="object-contain"
                priority

              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                scroll={isScrolled}
                label={link.label}
                isActive={activeLink === link.href}
                onClick={() => handleLinkClick(link.href)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className={`text-blue-600 border-none bg-white hover:text-blue-600 rounded-full cursor-pointer`}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Get Started
            </Button>
            <Button
              className={`${isScrolled ? "text-gray-600" : "text-white"} hover:border hover:border-white hover:text-white rounded-full cursor-pointer`}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {
                isMobileMenuOpen ? (
                  <X className="size-8 text-white" />
                ) : (
                  <Menu className="size-8 text-white" />
                )
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Right Sidebar */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-8 w-8 text-gray-500" />
            </Button>
          </div>

          {/* Mobile navigation links */}
          <div className="p-4 flex flex-col gap-2 bg-white h-screen">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-blue-600 bg-blue-50 border border-blue-200"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}