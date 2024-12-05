import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: IconType;
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export interface FileUploadProps {
  label?: string;
  description?: string;
  acceptedFormats?: string;
  maxSizeText?: string;
  onFileSelect?: (file: File | null) => void;
  containerClassName?: string;
  labelClassName?: string;
}

export interface SingleDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  [key: string]: any;
}

export interface ConsentCheckboxProps {
  name: string;
  label: string;
}

export interface NavbarProps {
  logoSrc?: string | StaticImageData;
  profileSrc: string | StaticImageData;
  profileName?: string;
  showSearch?: boolean;
  className?: string;
  onNavigateToProfile?: () => void;
  onLogout?: () => void;
}

export interface FileInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: any;
  role: string;
}

export interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}
