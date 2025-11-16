"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedTitle from "@/lib/EnhancedTitle";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Banknote, X, ExternalLink } from "lucide-react";
import { programs } from "@/constants/Info";

export const TrainingProgramsSection = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <section
      id="training-programs"
      className="relative py-20 bg-gradient-to-b from-white via-sky-50/60 to-white"
      aria-labelledby="training-programs-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 id="training-programs-title" className="text-4xl font-extrabold">
            <EnhancedTitle>
              Premium Professional Training Series 2025
            </EnhancedTitle>
          </h2>
          <p className="mt-4 text-base text-gray-700">
            <span className="font-semibold">
              “Building Competent Professionals for a Results‑Driven”
            </span>
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
            <span>
              Organizer:{" "}
              <span className="font-medium">MDS Experts Ltd, Rwanda</span>
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>
              Facilitators: Certified Experts in Project Management, Business
              Analysis, Agile, M&amp;E, and Coaching
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-700">
            Join Rwanda’s leading training and consultancy firm for a
            life-changing professional development experience!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              className="group h-full rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-xs"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                  <span className="text-sm font-semibold">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-3 rounded-xl border border-gray-200 bg-white p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold text-gray-900">
              Why You Should Attend
            </h4>
            <ul role="list" className="mt-4 space-y-3">
              {[
                "Learn from certified industry professionals and real‑world project leaders.",
                "Build career‑advancing technical and leadership skills.",
                "Earn certificates recognized by global professional bodies.",
                "Get guidance on PMI exam registration and success strategy.",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.mdsexperts.rw/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Register online (opens in a new tab)"
              >
                <Button
                  className="bg-sky-700 hover:bg-sky-800 text-white cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdwwGBn2b7Mq0teSf36RKHDaSYCOFzV-E99u8c4IICKT_uK8g/viewform?usp=header",
                      "_blank",
                    )
                  }
                >
                  Register now
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={() => setShowPayment(true)}
                aria-haspopup="dialog"
                aria-expanded={showPayment}
                className="cursor-pointer hover:bg-gray-400 hover:text-white"
              >
                <Banknote className="h-4 w-4" />
                View payment info
              </Button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Payment details are hidden by default to keep the page focused.
              Click “View payment info” to see them.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2 rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-indigo-50 p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold text-gray-900">
              How to Register
            </h4>
            <ol className="mt-4 list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>Complete the online registration form.</li>
              <li>Make your payment to confirm your slot.</li>
              <li>
                Receive confirmation and training link (for virtual
                participants).
              </li>
            </ol>
            <a
              href="https://www.mdsexperts.rw/register"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex"
            >
              <Button
                variant="link"
                className="px-0"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdwwGBn2b7Mq0teSf36RKHDaSYCOFzV-E99u8c4IICKT_uK8g/viewform?usp=header",
                    "_blank",
                  )
                }
                aria-label="Go to registration (opens in a new tab)"
              >
                Go to registration
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {showPayment ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Payment information"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowPayment(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b p-4">
              <h5 className="text-base font-semibold text-gray-900">
                Participation Fees & Payment
              </h5>
              <button
                aria-label="Close payment information"
                onClick={() => setShowPayment(false)}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <div className="text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Category</span>
                    <span>Local Participants (RWF)</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-medium">
                      Full Professional Package (per course)
                    </span>
                    <span className="text-gray-900 font-semibold">
                      800,000 RWF
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-emerald-700">
                    Discount: Register 4 participants and get 1 free!
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-900">
                  Payment Information
                </p>
                <dl className="mt-2 grid grid-cols-1 gap-y-1 text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Bank Name</dt>
                    <dd>Bank of Kigali</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Account Name</dt>
                    <dd>MDS EXPERTS LIMITED</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Account Number</dt>
                    <dd>100228389417</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Currency</dt>
                    <dd>Rwandan Franc (RWF)</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setShowPayment(false)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default TrainingProgramsSection;
