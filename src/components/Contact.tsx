import React, { useState, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lakumvipul6351@gmail.com",
      link: "mailto:lakumvipul6351@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Drangadhra, Surendranagar, Gujarat, India",
      link: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Vipullakum007",
      link: "https://github.com/Vipullakum007"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vipul-lakum-114043252/"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData({
      user_name: '',
      email: '',
      message: ''
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_ext8ndk',
        'template_51xpojd',
        formRef.current,
        'LHFewshSbvFPHwcSY'
      );
      toast.success('Message sent successfully!');
      resetForm();
      // Show success message briefly
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow placeholder-transparent";
  const labelClasses = "absolute left-4 -top-2.5 px-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 transition-all";

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Get in Touch
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              >
                <motion.div variants={itemVariants} className="relative">
                  <input type="hidden" name="contact_number" value={Math.floor(Math.random() * 100000)} />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={inputClasses}
                  />
                  <label htmlFor="user_name" className={labelClasses}>Name</label>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={inputClasses}
                  />
                  <label htmlFor="email" className={labelClasses}>Email</label>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Message"
                    className={inputClasses + " resize-none"}
                  ></textarea>
                  <label htmlFor="message" className={labelClasses}>Message</label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message Overlay */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 rounded-lg"
                  >
                    <div className="text-center">
                      <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-4" />
                      <p className="text-gray-800 dark:text-white font-medium">Message sent successfully!</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-1 gap-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{item.label}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;