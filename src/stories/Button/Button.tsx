import { generateClasses, parseClasses } from "../../utils";
import type { HTMLProps, ReactNode } from "react";

export interface ButtonMods {
  primary: true
  secondary: true
  small: true
  large: true
  link: true
  fit: true
  bold: true
  danger: true
  img: true
  icon: true
}

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  className?: string
  mods?: (keyof ButtonMods)[]
  type?: 'submit' | 'reset' | 'button'
}


export function Button({ children, className = '', mods = [], type, ...props }: Props) {
  const classes = generateClasses(className, mods, 'button');

  
  return (
    <button
      type={type}
      {...parseClasses(classes)}
      {...props}
    >
      { children }
    </button>
  );
}
