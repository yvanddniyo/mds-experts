"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});
const templateId = "template_htkms9a";
const serviceId = "service_wyj0wep";
const publicKey = "lcQ98NFUkGprVdDnL";

const useContactus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    setIsLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          to_name: "MDS Experts Ltd",
          from_email: data.email,
          to_email: "nyvan80076@gmail.com",
          subject: data.subject,
          message: data.message,
        },
        publicKey,
      )
      .then(() => {
        setIsLoading(false);
        toast.success("Your message has been sent successfully", {
          duration: 5000,
          position: "top-right",
        });
        form.reset();
      })
      .catch((error: unknown) => {
        setIsLoading(false);
        console.error("EmailJS send error:", error);
        toast.error("An error occurred while sending the message " + error, {
          duration: 5000,
          position: "top-right",
        });
      });
  };
  return {
    form,
    onSubmit,
    isLoading,
  };
};

export default useContactus;
