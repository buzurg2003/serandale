"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa';
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Smart Contracts', href: '#smart-contracts' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Whitepaper', href: '#whitepaper' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaDiscord size={20} />, href: 'https://discord.com', label: 'Discord' },
    { icon: <FaReddit size={20} />, href: 'https://reddit.com', label: 'Reddit' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <header className="fixed top-0 w-full z-100  backdrop-blur-md ">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-medium text-white tracking-tighter">
          SITE NAME
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} className="text-gray-400 hover:text-white transition-colors p-2">
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#020617] border-b border-white/10 py-8 px-6 flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl text-white font-light">
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/5 w-full justify-center">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="text-white p-2">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}