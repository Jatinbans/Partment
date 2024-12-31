import { motion } from 'framer-motion';
import React from 'react';

function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small property owners",
      features: [
        "Up to 5 properties",
        "Basic tenant management",
        "Payment processing",
        "Maintenance requests",
        "24/7 support"
      ]
    },
    {
      name: "Professional",
      price: "79",
      description: "Ideal for growing portfolios",
      popular: true,
      features: [
        "Up to 20 properties",
        "Advanced tenant screening",
        "Financial reporting",
        "Document management",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large property portfolios",
      features: [
        "Unlimited properties",
        "Custom integrations",
        "Dedicated manager",
        "Advanced analytics",
        "White-label solution"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-8 rounded-xl ${
                plan.popular 
                  ? 'ring-2 ring-blue-600 shadow-xl' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Pricing;
