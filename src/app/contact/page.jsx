/* eslint-disable react/no-unescaped-entities */
"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <main className="min-h-screen px-6 lg:px-20 py-32 bg-[#eaf0fb] text-[#0f172a] font-sans relative overflow-hidden">
      {/* === Animated Gradient Trail === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 opacity-30 blur-2xl rounded-full animate-pulse-slow" />
      </div>

      {/* === Title & Description === */}
      <div className="grid grid-cols-1 items-start relative z-10">
        <motion.h1
          id="contact-title"
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {[
            "TELL US WHAT YOU ENVISION,",
            "WHAT YOU'RE BUILDING,",
            "WHAT MOVES YOUR CITY,",
            "AND WE’LL BUILD IT TOGETHER.",
          ].map((line, i) => (
            <motion.span
              key={i}
              className="block"
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* === Form Section === */}
      <div className="flex flex-row justify-end min-h-[460px] mt-20 relative z-10">
        <motion.p
          className="mt-6 text-sm text-gray-700 uppercase -tracking-normal w-1/2 pr-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          WITH US IT HAPPENS.
          <br />
          WE WOULD LOVE TO HEAR FROM YOU.
        </motion.p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10 w-full md:w-1/2 backdrop-blur-md p-8"
        >
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Your Email", name: "email", type: "email" },
            { label: "Your Address", name: "address", type: "text" },
            { label: "Your Phone", name: "phone", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} className="space-y-1">
              <label
                htmlFor={name}
                className="text-sm text-gray-500 uppercase tracking-wider"
              >
                {label}
              </label>
              <input
                id={name}
                type={type}
                {...register(name)}
                className="w-full bg-transparent border-b border-black text-base py-2 placeholder-gray-400 focus:outline-none focus:border-[#00c896]"
              />
            </div>
          ))}

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="relative overflow-hidden border border-black text-black font-semibold text-sm rounded-full px-6 py-2 group"
            >
              <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                SEND →
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* === Footer / Socials === */}
      <div className="mt-32 flex flex-col lg:flex-row justify-between items-start gap-10 text-sm text-[#0f172a] relative z-10">
        <div className="space-y-2">
          <p className="font-medium">Contact</p>
          <p>hello@neomobility.com</p>
          <div className="flex gap-4 text-sm pt-2">
            {["LinkedIn", "Instagram", "Twitter", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="relative text-black transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-xs leading-relaxed">
          <p className="italic">
            “Neo is redefining the future of urban transport. Let’s build it
            together.”
          </p>
          <p className="mt-3">
            We’re based in India. Whether you’re in logistics, retail, or
            tech—we’re here to talk EVs.
          </p>
        </div>
      </div>
    </main>
  );
}
