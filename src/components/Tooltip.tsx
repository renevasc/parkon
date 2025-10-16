'use client';

import { useState } from 'react';

interface TooltipProps {
  content: string;
}

export default function Tooltip({ content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        className="tooltip"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-label="Mais informações"
        aria-describedby={isVisible ? 'tooltip-content' : undefined}
      >
        ?
      </button>
      {isVisible && (
        <span
          id="tooltip-content"
          role="tooltip"
          className="absolute z-10 w-64 p-3 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-2 left-8 animate-fade-in"
        >
          {content}
          <span className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-4"></span>
        </span>
      )}
    </span>
  );
}


