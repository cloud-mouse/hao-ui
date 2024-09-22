import type { Component, Ref } from 'vue';

export type ButtonType = 'primary' | 'default' | 'success' | 'danger' | 'warning' | 'info' | 'text' | 'link';
export type ButtonSize = 'small' | 'default' | 'large';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  nativeType?: NativeType
  loading?: boolean
  icon?: string | Component
  circle?: boolean
  plain?: boolean
  round?: boolean
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonInstance { 
  ref: Ref<HTMLButtonElement | void>
}