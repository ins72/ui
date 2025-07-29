"use client";

import {  useState , useEffect } from "react";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCreateEntity, useUpdateEntity, useDeleteEntity } from '@/hooks/useApi';
import { useNotifications } from '@/contexts/AppContext';
import Field from "@/style-reference/components/Field";
import Button from "@/style-reference/components/Button";
import Modal from "@/style-reference/components/Modal";

interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file' | 'date' | 'url';
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    custom?: (value: any) => string | null;
  };
}

interface CRUDFormProps {
  endpoint: string;
  fields: Field[];
  title: string;
  mode: 'create' | 'edit' | 'view';
  initialData?: any;
  onSuccess?: (data: any) => void;
  onCancel?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  className?: string;
}

export const CRUDForm: React.FC<CRUDFormProps> = ({
  endpoint,
  fields,
  title,
  mode,
  initialData = {},
  onSuccess,
  onCancel,
  submitLabel,
  cancelLabel,
  className = '',
}) => {
  const [formData, setFormData] = useState<any>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { mutate: create, loading: creating } = useCreateEntity(endpoint);
  const { mutate: update, loading: updating } = useUpdateEntity(endpoint);
  const { mutate: remove, loading: deleting } = useDeleteEntity(endpoint);
  const { showNotification } = useNotifications();

  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData, mode]);

  const validateField = (field: Field, value: any): string | null => {
    if (field.required && (!value || value.toString().trim() === '')) {
      return `${field.label} is required`;
    }

    if (value && field.validation) {
      const { validation } = field;

      if (validation.pattern && !validation.pattern.test(value)) {
        return `${field.label} format is invalid`;
      }

      if (validation.minLength && value.length < validation.minLength) {
        return `${field.label} must be at least ${validation.minLength} characters`;
      }

      if (validation.maxLength && value.length > validation.maxLength) {
        return `${field.label} must be no more than ${validation.maxLength} characters`;
      }

      if (validation.min && Number(value) < validation.min) {
        return `${field.label} must be at least ${validation.min}`;
      }

      if (validation.max && Number(value) > validation.max) {
        return `${field.label} must be no more than ${validation.max}`;
      }

      if (validation.custom) {
        return validation.custom(value);
      }
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showNotification({
        type: 'error',
        title: 'Validation Error',
        message: 'Please fix the errors in the form'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let result;
      if (mode === 'create') {
        result = await create(formData);
      } else if (mode === 'edit') {
        result = await update({ id: initialData.id, data: formData });
      }

      if (result) {
        showNotification({
          type: 'success',
          title: 'Success',
          message: mode === 'create' ? 'Item created successfully' : 'Item updated successfully'
        });
        onSuccess?.(result);
      }
    } catch (error) {
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData.id) return;

    try {
      await remove(initialData.id);
      showNotification({
        type: 'success',
        title: 'Success',
        message: 'Item deleted successfully'
      });
      onSuccess?.(null);
    } catch (error) {
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred while deleting'
      });
    } finally {
      setShowDeleteConfirm(false);
    }
  };

  const renderField = (field: Field) => {
    const value = formData[field.name] || '';
    const error = errors[field.name];

    switch (field.type) {
      case 'textarea':
        return (
          <Field
            key={field.name}
            label={field.label}
            textarea
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={error ? 'border-primary-03' : ''}
          />
        );

      case 'select':
        return (
          <Field
            key={field.name}
            label={field.label}
            className={error ? 'border-primary-03' : ''}
          >
            <select
              className="w-full h-12 px-4.5 border border-s-stroke2 rounded-full text-body-2 text-t-primary outline-none transition-colors hover:border-s-highlight focus:border-s-highlight bg-b-surface2"
              value={value}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            >
              <option value="">{field.placeholder || 'Select an option'}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        );

      case 'checkbox':
        return (
          <Field
            key={field.name}
            label={field.label}
            className={error ? 'border-primary-03' : ''}
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-01 border-s-stroke2 rounded focus:ring-primary-01"
              checked={value}
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
            />
          </Field>
        );

      default:
        return (
          <Field
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={error ? 'border-primary-03' : ''}
          />
        );
    }
  };

  return (
    <>
      <div className={`card ${className}`}>
        <div className="flex items-center h-12 pl-5 max-lg:pl-3">
          <div className="mr-auto text-h6">{title}</div>
        </div>
        <div className="pt-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 max-lg:grid-cols-1 gap-6">
              {fields.map(renderField)}
            </div>

            {Object.keys(errors).length > 0 && (
              <div className="p-4 bg-primary-03/10 border border-primary-03/20 rounded-2xl">
                <div className="text-body-2 text-primary-03">
                  Please fix the following errors:
                </div>
                <ul className="mt-2 space-y-1">
                  {Object.values(errors).map((error, index) => (
                    <li key={index} className="text-caption text-primary-03">
                      • {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-4 pt-6">
              <Button
                type="submit"
                disabled={isSubmitting || creating || updating}
                isBlack
              >
                {isSubmitting || creating || updating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    {submitLabel || (mode === 'create' ? 'Creating...' : 'Updating...')}
                  </div>
                ) : (
                  submitLabel || (mode === 'create' ? 'Create' : 'Update')
                )}
              </Button>

              {onCancel && (
                <Button
                  type="button"
                  onClick={onCancel}
                  isStroke
                  disabled={isSubmitting}
                >
                  {cancelLabel || 'Cancel'}
                </Button>
              )}

              {mode === 'edit' && (
                <Button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  isGray
                  disabled={isSubmitting || deleting}
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      {showDeleteConfirm && (
        <Modal
          open={showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(false)}
        >
          <div className="p-6">
            <div className="text-h6 mb-4">Confirm Delete</div>
            <p className="text-body-2 text-t-secondary mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex items-center gap-4">
              <Button
                onClick={handleDelete}
                isBlack
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </Button>
              <Button
                onClick={() => setShowDeleteConfirm(false)}
                isStroke
                disabled={deleting}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CRUDForm; 