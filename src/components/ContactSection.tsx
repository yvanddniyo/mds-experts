import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import mdsExpert from "@/assets/MDS-White.png";

const ContactSection = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-16 text-white bg-gradient-to-b from-sky-700 via-sky-700 to-sky-800"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="relative h-14 w-40">
              <Image
                src={mdsExpert}
                alt="MDS Experts Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-blue-100 leading-7">
              Empowering organizations and individuals across Africa with
              high‑quality capacity‑building solutions and expert business
              support.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                aria-label="Twitter"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition hover:bg-white/25"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition hover:bg-white/25"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition hover:bg-white/25"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition hover:bg-white/25"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/program/consulting"
                  className="hover:text-white transition"
                >
                  Programs
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 ring-1 ring-white/20">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p>+250788520674</p>
                  <p>+250781833313</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 ring-1 ring-white/20">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:mdsexperts5@gmail.com"
                  className="hover:text-white transition"
                >
                  mdsexperts5@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 ring-1 ring-white/20">
                  <MapPin className="h-4 w-4" />
                </span>
                <p>
                  Kigali, Gasabo, Kanombe kabeza
                  <br />
                  KK-276 ST, Kigali – Rwanda
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/90">
              Stay up to date
            </h3>
            <p className="mt-4 text-blue-100">
              Get updates on programs and events.
            </p>
            <form className="mt-4 flex max-w-md gap-2" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none ring-1 ring-white/10 backdrop-blur-md transition focus:border-white/40 focus:ring-white/30"
              />
              <button
                type="submit"
                className="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold ring-1 ring-white/30 transition hover:bg-white/30"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-white/70">
              We care about your privacy.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 py-6 text-sm text-blue-100">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>
              © {new Date().getFullYear()} MDS Experts Ltd. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="hover:text-white transition">
                Terms
              </a>
              <a href="/privacy" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
