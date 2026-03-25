import { generateClasses, parseClasses } from "../../utils";
import type { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  className?: string
  mods?: ('primary' | 'secondary' | 'small' | 'large' | 'link' | 'fit' | 'bold' | 'danger' | 'img' | 'icon')[]
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
