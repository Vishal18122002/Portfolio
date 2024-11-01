import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    emailjs.init("XOIgVbbw9X2UEIFFw"); // Initialize EmailJS with your public key
    controls.start("show");
  }, [controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_6nz9kpv', // Replace with your actual service ID
        'template_oxktmqm', // Replace with your actual template ID
        form
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setLoading(false);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0, transition: { type: "tween", duration: 1, delay: 0.2 } },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>
        <form onSubmit={handleSubmit} className="mt-12 gap-4 flex flex-col">
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type='submit' className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* Social Links Section */}
        <div className="mt-10">
          <h4 className="text-white font-medium">Connect with me:</h4>
          <div className="mt-2 text-white">
            <a href="https://www.linkedin.com/in/vishalg1812/" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline mr-4">LinkedIn</a>
            <a href="https://leetcode.com/vishalg1812/" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline mr-4">LeetCode</a>
            <a href="https://github.com/Vishal18122002" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline mr-4">GitHub</a>
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">Resume</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
