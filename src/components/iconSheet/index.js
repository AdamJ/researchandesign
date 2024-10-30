import React, { CSSProperties } from 'react';
import clsx from 'clsx';

// Build the Icon component with the specified props
const Icon = ({
  size = null, // The size of the icon; 'sm', 'lg', 'xl', 2xl', or null (which is medium)
  variant = 'solid', // Defaults to solid; use 'brands' for brand icons
  className, // Custom classes for the icon
  icon, // Name of the icon (i.e. fa-coffee)
}) => {
  const sizeMap = {
      sm: 'sm',
      small: 'sm',
      lg: 'lg',
      large: 'lg',
      xl: 'xl',
      xlarge: 'xl',
      xxl: '2xl',
      xxlarge: '2xl',
      md: null,
      medium: null,
  };
  const iconSize = size ? sizeMap[size] : '';
  const sizeClass = iconSize ? `fa-${iconSize}` : '';
  const variantClass = variant ? `fa-${variant}` : '';
  const iconClass = icon ? `fa-${icon}` : '';
  return (
    <i
      className={clsx(variantClass, sizeClass, iconClass, className)}
      role="icon"
    >
    </i>
  );
};

export default Icon;

// Solid, Medium
{/* <Icon variant="solid" size="md" icon="coffee" /> */}
// Solid, Large
{/* <Icon variant="solid" size="lg" icon="coffee" /> */}
// Block
{/* <Button label="Click me" link="#using" block /> */}
// Combined
{/* <Button label="Click me" link="#using" variant="danger" size="sm" outline block /> */}
