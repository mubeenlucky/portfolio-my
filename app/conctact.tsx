// pages/contact.tsx
"use client"
import { useState } from 'react';
import style from "../app/page.module.css";
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to a server or API.
    // For now, just log the data to the console.
    console.log(formData);

    // Reset form after submission (optional)
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="title">Contact Us</h1>
          <p className="description">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className="contact-info">
          <p>Email: <a href="mailto:example@email.com">example@email.com</a></p>
          <p>Address: 49 Smith St., Saint Cloud, MN 56301</p>
        </div>
      </div>
    </section>
  );
}
