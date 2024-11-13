import { IconType } from 'react-icons';


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