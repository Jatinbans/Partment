// src/components/Dashboard/Settings.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Dashboard.css';

const Settings = () => {
  return (
    <div className="dashboard-content">
      <h2>Account Settings</h2>

      <motion.div
        className="settings-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="settings-card">
          <h3>Profile Information</h3>
          <form className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" defaultValue="+1 234 567 8900" />
            </div>
            <button type="submit" className="save-btn">Save Changes</button>
          </form>
        </div>

        <div className="settings-card">
          <h3>Password</h3>
          <form className="settings-form">
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
            <button type="submit" className="save-btn">Update Password</button>
          </form>
        </div>

        <div className="settings-card">
          <h3>Notifications</h3>
          <div className="notification-settings">
            <div className="notification-option">
              <label>
                <input type="checkbox" defaultChecked />
                Email Notifications
              </label>
            </div>
            <div className="notification-option">
              <label>
                <input type="checkbox" defaultChecked />
                SMS Notifications
              </label>
            </div>
            <div className="notification-option">
              <label>
                <input type="checkbox" defaultChecked />
                Monthly Reports
              </label>
            </div>
          </div>
          <button className="save-btn">Save Preferences</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
