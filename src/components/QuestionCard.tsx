'use client';

import RadioGroup from './RadioGroup';
import Tooltip from './Tooltip';

interface QuestionCardProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
  tooltip?: string;
  required?: boolean;
}

export default function QuestionCard({ 
  label, 
  name, 
  value, 
  onChange, 
  options,
  tooltip,
  required = true
}: QuestionCardProps) {
  return (
    <div className="card">
      <label className="question-label" id={`${name}-label`}>
        {label}
        {tooltip && <Tooltip content={tooltip} />}
      </label>
      <RadioGroup
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        required={required}
        ariaLabel={label}
      />
    </div>
  );
}


