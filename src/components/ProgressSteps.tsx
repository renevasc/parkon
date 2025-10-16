'use client';

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function ProgressSteps({ currentStep, totalSteps, labels }: ProgressStepsProps) {
  return (
    <div className="mb-8" role="navigation" aria-label="Progresso do formulário">
      <div className="steps">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index} 
            className={`step ${index <= currentStep ? 'active' : ''}`}
            aria-current={index === currentStep ? 'step' : undefined}
          >
            <div className="step-number" aria-label={`Passo ${index + 1}`}>
              {index + 1}
            </div>
            {index < totalSteps - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-600">
        {labels.map((label, index) => (
          <span 
            key={index}
            className={index === currentStep ? 'font-semibold text-primary' : ''}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}


