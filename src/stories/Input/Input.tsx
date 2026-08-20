import { HTMLProps } from "react";
import { generateClasses, parseClasses } from "../../utils";

export interface InputMods {
  thin: true,
  small: true,
  'x-small': true,
  'label-stack': true,
  'label-no-stack': true,
  'label-space-between': true,
  'label-full-width': true,
  'label-bold': true,
  'label-inline': true,
  'label-no-margin': true,
  'no-style': true,
  'label-fit-content': true,
  'no-arrows': true
}

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string
  labelClass?: string
  mods?: (keyof InputMods)[]
  label?: string
}


export function Input({ className = '', labelClass = '', mods = [], label, ...props }: Props) {
  const labelClassList = mods.filter((v) => v.includes('label'));
  const classes = generateClasses(className, mods ? mods.filter((v) => !labelClassList.includes(v)) : [], 'input');
  const labelClasses = generateClasses(labelClass, labelClassList, 'input-label');


  return (
    <label {...parseClasses(labelClasses)}>
      { label }

      <input
        {...parseClasses(classes)}
        {...props}
        autoComplete="new-password"
      />
    </label>
  );
}
