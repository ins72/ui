import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from "@/style-reference/components/Button";

describe('Button Component', () => {
  const defaultProps = {
    children: 'Test Button',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders button with correct text', () => {
      render(<Button {...defaultProps} />);
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Button {...defaultProps} variant="primary" />);
      expect(screen.getByRole('button')).toHaveClass('btn-primary');

      rerender(<Button {...defaultProps} variant="secondary" />);
      expect(screen.getByRole('button')).toHaveClass('btn-secondary');

      rerender(<Button {...defaultProps} variant="outline" />);
      expect(screen.getByRole('button')).toHaveClass('btn-outline');

      rerender(<Button {...defaultProps} variant="ghost" />);
      expect(screen.getByRole('button')).toHaveClass('btn-ghost');
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Button {...defaultProps} size="sm" />);
      expect(screen.getByRole('button')).toHaveClass('btn-sm');

      rerender(<Button {...defaultProps} size="md" />);
      expect(screen.getByRole('button')).toHaveClass('btn-md');

      rerender(<Button {...defaultProps} size="lg" />);
      expect(screen.getByRole('button')).toHaveClass('btn-lg');
    });

    it('renders with loading state', () => {
      render(<Button {...defaultProps} loading={true} />);
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).toHaveClass('btn-loading');
    });

    it('renders with disabled state', () => {
      render(<Button {...defaultProps} disabled={true} />);
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).toHaveClass('btn-disabled');
    });

    it('renders with icon', () => {
      render(<Button {...defaultProps} icon="plus" />);
      expect(screen.getByRole('button')).toHaveClass('btn-with-icon');
    });

    it('renders with full width', () => {
      render(<Button {...defaultProps} fullWidth={true} />);
      expect(screen.getByRole('button')).toHaveClass('btn-full-width');
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', () => {
      render(<Button {...defaultProps} />);
      fireEvent.click(screen.getByRole('button'));
      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      render(<Button {...defaultProps} disabled={true} />);
      fireEvent.click(screen.getByRole('button'));
      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      render(<Button {...defaultProps} loading={true} />);
      fireEvent.click(screen.getByRole('button'));
      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it('handles keyboard interactions', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
      
      fireEvent.keyDown(button, { key: ' ' });
      expect(defaultProps.onClick).toHaveBeenCalledTimes(2);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes when loading', () => {
      render(<Button {...defaultProps} loading={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('has proper ARIA attributes when disabled', () => {
      render(<Button {...defaultProps} disabled={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('supports custom aria-label', () => {
      render(<Button {...defaultProps} aria-label="Custom label" />);
      expect(screen.getByRole('button', { name: 'Custom label' })).toBeInTheDocument();
    });

    it('supports custom aria-describedby', () => {
      render(<Button {...defaultProps} aria-describedby="description" />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(<Button {...defaultProps} className="custom-class" />);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<Button {...defaultProps} style={customStyle} />);
      expect(screen.getByRole('button')).toHaveStyle(customStyle);
    });

    it('combines multiple classes correctly', () => {
      render(
        <Button 
          {...defaultProps} 
          variant="primary" 
          size="lg" 
          className="custom-class" 
        />
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn-primary', 'btn-lg', 'custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('renders without children', () => {
      render(<Button onClick={jest.fn()} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with complex children', () => {
      render(
        <Button onClick={jest.fn()}>
          <span>Complex</span>
          <strong>Content</strong>
        </Button>
      );
      expect(screen.getByRole('button')).toHaveTextContent('ComplexContent');
    });

    it('handles undefined onClick gracefully', () => {
      render(<Button>No onClick</Button>);
      expect(() => {
        fireEvent.click(screen.getByRole('button'));
      }).not.toThrow();
    });

    it('renders with all props combined', () => {
      render(
        <Button
          variant="primary"
          size="lg"
          loading={true}
          disabled={true}
          icon="plus"
          fullWidth={true}
          className="custom-class"
          style={{ color: 'blue' }}
          aria-label="Combined button"
          onClick={jest.fn()}
        >
          Combined Button
        </Button>
      );
      
      const button = screen.getByRole('button', { name: 'Combined button' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(
        'btn-primary',
        'btn-lg',
        'btn-loading',
        'btn-disabled',
        'btn-with-icon',
        'btn-full-width',
        'custom-class'
      );
      expect(button).toHaveStyle({ color: 'blue' });
    });
  });

  describe('Integration', () => {
    it('works with form submission', () => {
      const handleSubmit = jest.fn((e) => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit</Button>
        </form>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('works with form reset', () => {
      const handleReset = jest.fn();
      render(
        <form onReset={handleReset}>
          <Button type="reset">Reset</Button>
        </form>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleReset).toHaveBeenCalledTimes(1);
    });
  });
}); 