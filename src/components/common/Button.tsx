import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'light' | 'light-outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  children,
  icon,
  className = '',
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ display: 'inline-block' }}
      >
        <Link to={to} className={combinedClass}>
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ display: 'inline-block' }}
    >
      <button className={combinedClass} {...props}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </button>
    </motion.div>
  );
};
