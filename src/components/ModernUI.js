import React from 'react';

/**
 * Modern animated button component inspired by Apple design
 */
export const ModernButton = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '12px',
    padding: '0.65rem 1.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #623686, #6d20c5)',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(98, 54, 134, 0.3)'
    },
    secondary: {
      background: 'rgba(147, 76, 206, 0.2)',
      color: '#c770f0',
      border: '1px solid rgba(199, 112, 240, 0.3)',
      backdropFilter: 'blur(10px)'
    }
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(109, 32, 197, 0.4)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(98, 54, 134, 0.3)';
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
  };

  const combinedStyles = { ...baseStyles, ...variantStyles[variant] };

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={`modern-button ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combinedStyles}
      className={`modern-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Animated section wrapper with scroll reveal
 */
export const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

/**
 * Glass card component with modern styling
 */
export const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const baseStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '1.5rem'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...baseStyles,
        transform: hover && isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hover && isHovered
          ? '0 16px 40px 0 rgba(31, 38, 135, 0.25)'
          : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
      }}
      className={`glass-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

const ModernUIComponents = { ModernButton, AnimatedSection, GlassCard };
export default ModernUIComponents;
