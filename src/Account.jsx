import React from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

const Account = () => {
  const [form, setForm] = React.useState({
    email: '',
    phone: '',
    password: '' // Note: Be careful with sending passwords via email
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  // Initialize EmailJS (you can put this in a useEffect if preferred)
  emailjs.init("iXTmrSHmKyM0_iZo-"); // Replace with your EmailJS public key

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim() || !/^\d{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Phone must be 10-15 digits";
    }

    if (!form.password.trim() || form.password.trim().length < 6 || 
        !/[A-Z]/.test(form.password.trim()) || !/\d/.test(form.password.trim())) {
      newErrors.password = "Password must be at least 6 characters, include an uppercase letter and a number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const register = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_wgsjkpo',
        'template_dl1lltd',
        {
          email: form.email,
          phone: form.phone,
          password: form.password
        }
      );

      console.log('Email sent successfully!', response);
      setSubmitStatus('success');
      setForm({ email: '', phone: '', password: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className='register'>
      <form className='form' onSubmit={register}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"  
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="emailE"
        />
        <span id='emailE' className="error">{errors.email}</span>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"  // Changed from text to tel for better mobile input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby="phoneE"
        />
        <span id='phoneE' className="error">{errors.phone}</span>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          aria-invalid={!!errors.password}
          aria-describedby="passwordE"
        />
        <span id='passwordE' className="error">{errors.password}</span>

        <button 
          className='registerbtn' 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Register'}
        </button>

        {submitStatus === 'success' && (
          <div className="success-message">
            Registration successful! Check your email.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="error-message">
            Failed to send registration. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default Account;