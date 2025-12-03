import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { trackInquiry } from '../lib/analytics';
import { CONTACT_PHONES, PHONE_1 } from '../config/constants';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_name: 'Sree Kanaka Maha Lakshmi Nilayam',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Track the inquiry in analytics
        trackInquiry(formData);
        alert('Thank you for your interest! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert(`Sorry, there was an error sending your message. Please call us directly at ${PHONE_1}.`);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us - Schedule Your Visit Today</h2>
        <p className="section-subtitle">
          Interested in viewing our quality 2BHK apartments? Get in touch with us to schedule a property visit, 
          discuss availability, pricing, and learn more about living at Sree Kanaka Maha Lakshmi Nilayam. 
          Our team is available to answer all your questions and help you find your perfect home in Eluru.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Sree Kanaka Maha Lakshmi Nilayam</p>
                <p>7th Road, Sriram Nagar</p>
                <p>Eluru, Sanivarapupeta</p>
                <p>Andhra Pradesh 534003, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone Numbers</h4>
                {CONTACT_PHONES.map((phone) => (
                  <p key={phone}><a href={`tel:${phone}`}>{phone}</a></p>
                ))}
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏠</div>
              <div>
                <h4>Available Units</h4>
                <p>2BHK East Facing Apartments</p>
                <p>Well Ventilated & Spacious</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h4>Visit Us</h4>
                <p>Monday - Sunday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  minLength="2"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message * (Max 175 characters)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your requirements"
                  minLength="10"
                  maxLength="175"
                ></textarea>
                <small className="char-count">{formData.message.length}/175</small>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
