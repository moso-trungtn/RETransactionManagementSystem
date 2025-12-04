import * as React from 'react';
import {Button, ButtonProps} from '../ui/button';
import { useThemeColors } from "@/hooks/useThemeColors";

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, style, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const { primaryColor, getPrimaryHoverStyle } = useThemeColors();
    const [isHovered, setIsHovered] = React.useState(false);

    const combinedStyle = {
      backgroundColor: primaryColor,
      color: 'white',
      ...(isHovered ? getPrimaryHoverStyle() : {}),
      ...style,
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <Button
        ref={ref}
        className={className}
        style={combinedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
