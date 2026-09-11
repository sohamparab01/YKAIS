import React from 'react';
import { motion } from 'framer-motion';

interface EditorialSplitProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  mediaContent: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export const EditorialSplit: React.FC<EditorialSplitProps> = ({
  eyebrow,
  title,
  children,
  mediaContent,
  reverse = false,
  className = '',
}) => {
  return (
    <div className={`editorial-split ${reverse ? 'editorial-split-reverse' : ''} ${className}`}>
      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 style={{ marginBottom: '1.25rem' }}>{title}</h2>
        <div className="lead-text">{children}</div>
      </motion.div>

      {/* Media / Visual Card Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        {mediaContent}
      </motion.div>
    </div>
  );
};
