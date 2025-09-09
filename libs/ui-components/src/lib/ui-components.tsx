import React from 'react';
import styles from './ui-components.module.css';

// Button Component
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  onClick, 
  type = 'button' 
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Input Component
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  error?: string;
  required?: boolean;
}

export function Input({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  error, 
  required = false 
}: InputProps) {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        required={required}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

// Card Component
export interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

// Loading Spinner
export function LoadingSpinner() {
  return <div className={styles.spinner}></div>;
}

// Main export (for backward compatibility)
export function UiComponents() {
  return (
    <div className={styles['container']}>
      <h1>UI Components Library</h1>
      <div className={styles.showcase}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
    </div>
  );
}

export default UiComponents;
