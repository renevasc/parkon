'use client';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  ariaLabel?: string;
}

export default function RadioGroup({ 
  name, 
  value, 
  options, 
  onChange, 
  required = false,
  ariaLabel 
}: RadioGroupProps) {
  return (
    <div 
      className="radio-group" 
      role="radiogroup" 
      aria-label={ariaLabel || name}
      aria-required={required}
    >
      {options.map((option) => (
        <div key={option.value} className="radio-option">
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            required={required}
            aria-checked={value === option.value}
          />
          <label htmlFor={`${name}-${option.value}`}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}


