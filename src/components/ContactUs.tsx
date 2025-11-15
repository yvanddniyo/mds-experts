import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import EnhancedTitle from "@/lib/EnhancedTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import useContactus from "./Hooks/useContactus";
import { Textarea } from "./ui/textarea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";

const ContactUs = () => {
  const { form, onSubmit, isLoading } = useContactus();
  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-400/20 to-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
            We’d love to hear from you
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <EnhancedTitle>Contact Us</EnhancedTitle>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Questions, partnership ideas, or project inquiries? Send us a
            message and we’ll respond promptly.
          </p>
        </div>

        {/* Info + Form */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Cards */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-gray-200 backdrop-blur-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call us
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mon–Fri, 9:00–17:00 (CAT)
                  </p>
                  <div className="flex items-center lg:flex-row flex-col lg:gap-2">
                    <p className="text-sm text-gray-600">
                      Phone:{" "}
                      <a
                        href="tel:+250788520674"
                        className="mt-2 inline-block text-sm font-medium text-sky-700 hover:underline"
                      >
                        +250788520674
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 pt-2 hidden lg:block">
                      |
                    </p>
                    <p className="text-sm text-gray-600">
                      Phone:{" "}
                      <a
                        href="tel:+250781833313"
                        className="mt-2 inline-block text-sm font-medium text-sky-700 hover:underline"
                      >
                        +250781833313
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-gray-200 backdrop-blur-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    We reply within 1–2 business days
                  </p>
                  <a
                    href="mailto:info@mdsexpertspro.com"
                    className="mt-2 inline-block text-sm font-medium text-indigo-700 hover:underline"
                  >
                    info@mdsexpertspro.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 ring-1 ring-violet-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Office
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Kigali, Gasabo, Kanombe kabeza
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    KK-276 ST, Kigali – Rwanda
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Open for meetings by appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <iframe
                title="Office map"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.425438564205!2d30.12878907627454!3d-1.984464797997591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7dceb18e16f%3A0xa8c528f4dbfb6fbb!2sKK%20276%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1761909160441!5m2!1sen!2srw"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm sm:p-8">
              <Form {...form}>
                <form
                  className="flex flex-col gap-6"
                  onSubmit={form.handleSubmit(
                    onSubmit as SubmitHandler<FieldValues>,
                  )}
                >
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Full name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Micheal Nsengimana"
                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400  outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="your@email.com"
                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400  outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="How can we help?"
                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400  outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            rows={10}
                            cols={30}
                            maxLength={1000}
                            placeholder="Tell us a bit about your project or question..."
                            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400  outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-sky-700 hover:to-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:w-auto cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        "Send message"
                      )}
                      {isLoading ? null : <Send className="h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
