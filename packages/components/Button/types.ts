import type { Component, ComputedRef, Ref } from 'vue';

export type ButtonType = 'primary' | 'default' | 'success' | 'danger' | 'warning' | 'info' | 'text' | 'link';
export type ButtonSize = 'small' | 'default' | 'large';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  nativeType?: NativeType
  icon?: string;
  loading?: boolean
  loadingIcon?: string;
  circle?: boolean
  plain?: boolean
  round?: boolean
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonEmits {
  (e: "click", value: MouseEvent): void;
}

export interface ButtonInstance { 
  ref: Ref<HTMLButtonElement | void>
  disabled: ComputedRef<boolean>;
  size: ComputedRef<string>;
  type: ComputedRef<string>;
}