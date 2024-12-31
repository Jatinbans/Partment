// components/Home/FAQ.jsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our 14-day free trial gives you full access to all features. No credit card required. Simply sign up and start exploring the platform."
    },
    {
      question: "Can I manage multiple properties?",
      answer: "Yes! Depending on your plan, you can manage multiple properties. The Starter plan includes up to 5 properties, Professional up to 20, and Enterprise offers unlimited properties."
    },
    {
      question: "Is there a fee?",
      answer: "No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, MasterCard, and American Express. We also support payment via PayPal."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="faq-section" id="faq">
      <motion.div
        className="faq-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="faq-title"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="faq-subtitle"
          variants={itemVariants}
        >
          Everything you need to know about the product and billing
        </motion.p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              variants={itemVariants}
            >
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="faq-icon"></span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
