export interface EnquiryFormData {
  firstName: string;
  lastName?: string;
  email: string;
  enquiryType: string;
  message: string;
}

export const ENQUIRY_OPTIONS = [
  'Admission',
  'Sports Program',
  'Coaching',
  'Fees',
  'Training Schedule',
  'General Enquiry',
] as const;

export type EnquiryOption = (typeof ENQUIRY_OPTIONS)[number];

export const PRIMARY_WHATSAPP_NUMBER = '918788383113';

/**
 * Generates a structured dynamic text message for YKAIS WhatsApp inquiries.
 */
export const generateWhatsAppEnquiryMessage = (data: EnquiryFormData): string => {
  const firstNameTrimmed = data.firstName.trim();
  const lastNameTrimmed = data.lastName?.trim() || '';
  const fullName = lastNameTrimmed ? `${firstNameTrimmed} ${lastNameTrimmed}` : firstNameTrimmed;

  return `Hello YKAIS Institute,

My name is ${fullName}.

Enquiry: ${data.enquiryType.trim()}

Message:
${data.message.trim()}

Email:
${data.email.trim()}

Thank you.`;
};

/**
 * Creates a valid WhatsApp click-to-chat URL with properly encoded message parameters.
 */
export const getWhatsAppClickToChatUrl = (
  message: string,
  phoneNumber: string = PRIMARY_WHATSAPP_NUMBER
): string => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
