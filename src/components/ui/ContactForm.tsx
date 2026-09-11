import React, { useState } from 'react';
import { Button } from '../common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  generateWhatsAppEnquiryMessage,
  getWhatsAppClickToChatUrl,
  type EnquiryFormData,
} from '../../utils/whatsapp';
import { useLanguage } from '../../context';

export const ContactForm: React.FC = () => {
  const { dictionary } = useLanguage();
  const f = dictionary.contact.form;

  const [submitted, setSubmitted] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    enquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});

  const enquiryOptionsList = [
    { value: 'Admission', label: f.enquiryOptions.admission },
    { value: 'Sports Program', label: f.enquiryOptions.sportsProgram },
    { value: 'Coaching', label: f.enquiryOptions.coaching },
    { value: 'Fees', label: f.enquiryOptions.fees },
    { value: 'Training Schedule', label: f.enquiryOptions.trainingSchedule },
    { value: 'General Enquiry', label: f.enquiryOptions.generalEnquiry },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = f.errors.firstName;
    }

    if (!formData.email.trim()) {
      newErrors.email = f.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = f.errors.emailValid;
    }

    if (!formData.enquiryType.trim()) {
      newErrors.enquiryType = f.errors.enquiryType;
    }

    if (!formData.message.trim()) {
      newErrors.message = f.errors.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppEnquiryMessage(formData);
    const whatsappUrl = getWhatsAppClickToChatUrl(message);
    setGeneratedUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp click-to-chat in a new browser tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: 'var(--color-cream-light)',
          padding: '3rem 2rem',
          borderRadius: 'var(--card-radius)',
          border: '1px solid var(--color-navy)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-white)',
            marginBottom: '1rem',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
          {f.successTitle}
        </h3>
        <p style={{ color: 'var(--color-charcoal)', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
          {f.successDesc}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {generatedUrl && (
            <Button
              type="button"
              variant="primary"
              size="sm"
              icon={<ArrowRight size={16} />}
              onClick={() => window.open(generatedUrl, '_blank', 'noopener,noreferrer')}
            >
              {f.reopenWhatsApp}
            </Button>
          )}
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                enquiryType: '',
                message: '',
              });
              setErrors({});
            }}
          >
            {f.sendAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        backgroundColor: 'var(--color-white)',
        padding: '2.5rem',
        borderRadius: 'var(--card-radius)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--color-gray-border)',
      }}
    >
      <h3 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
        {f.heading}
      </h3>

      {/* First & Last Name */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div>
          <label style={labelStyle}>
            {f.firstNameLabel} <span style={{ color: '#c92a2a' }}>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={f.firstNamePlaceholder}
            style={{
              ...inputStyle,
              borderColor: errors.firstName ? '#c92a2a' : 'var(--color-gray-border)',
            }}
          />
          {errors.firstName && <div style={errorTextStyle}>{errors.firstName}</div>}
        </div>
        <div>
          <label style={labelStyle}>{f.lastNameLabel}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={f.lastNamePlaceholder}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email Address */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>
          {f.emailLabel} <span style={{ color: '#c92a2a' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={f.emailPlaceholder}
          style={{
            ...inputStyle,
            borderColor: errors.email ? '#c92a2a' : 'var(--color-gray-border)',
          }}
        />
        {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
      </div>

      {/* What Are You Enquiring About? Dropdown */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>
          {f.enquiryTypeLabel} <span style={{ color: '#c92a2a' }}>*</span>
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          style={{
            ...inputStyle,
            borderColor: errors.enquiryType ? '#c92a2a' : 'var(--color-gray-border)',
            cursor: 'pointer',
            backgroundColor: 'var(--color-white)',
          }}
        >
          <option value="" disabled>
            {f.enquiryTypeSelect}
          </option>
          {enquiryOptionsList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.enquiryType && <div style={errorTextStyle}>{errors.enquiryType}</div>}
      </div>

      {/* Message / Program Inquiry */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label style={labelStyle}>
          {f.messageLabel} <span style={{ color: '#c92a2a' }}>*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          style={{
            ...inputStyle,
            resize: 'vertical',
            borderColor: errors.message ? '#c92a2a' : 'var(--color-gray-border)',
          }}
        />
        {errors.message && <div style={errorTextStyle}>{errors.message}</div>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        icon={<ArrowRight size={18} />}
        style={{ width: '100%', maxWidth: '100%' }}
      >
        {f.submitButton}
      </Button>
    </form>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: 700,
  marginBottom: '0.375rem',
  color: 'var(--color-charcoal)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.9375rem',
  fontFamily: 'var(--font-body)',
  borderRadius: '8px',
  border: '1px solid var(--color-gray-border)',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'var(--color-white)',
  color: 'var(--color-navy)',
};

const errorTextStyle: React.CSSProperties = {
  color: '#c92a2a',
  fontSize: '0.78125rem',
  fontWeight: 600,
  marginTop: '0.35rem',
};
