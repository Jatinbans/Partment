// src/components/Dashboard/Analytics.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Dashboard.css';

const Analytics = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$43,000",
      change: "+12%",
      positive: true
    },
    {
      title: "Occupancy Rate",
      value: "92%",
      change: "+5%",
      positive: true
    },
    {
      title: "Active Tenants",
      value: "45",
      change: "+3",
      positive: true
    },
    {
      title: "Maintenance Requests",
      value: "8",
      change: "-2",
      positive: true
    }
  ];

  return (
    <div className="dashboard-content">
      <h2>Analytics Overview</h2>
      
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-change ${metric.positive ? 'positive' : 'negative'}`}>
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="chart-section">
        <div className="chart-card">
          <h3>Revenue Trend</h3>
          {/* Add your preferred charting library here */}
          <div className="chart-placeholder">
            Revenue Chart
          </div>
        </div>

        <div className="chart-card">
          <h3>Occupancy Rate</h3>
          <div className="chart-placeholder">
            Occupancy Chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
