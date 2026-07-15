'use client';

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
};

export function ChoiceGroup({ options, value, onChange, hasError }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg ${
        hasError ? 'border border-error/60 p-2' : ''
      }`}
    >
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            className={`flex items-center rounded-lg border px-4 py-3 text-left text-sm transition-colors sm:text-base ${
              selected
                ? 'border-primary bg-primary-light text-primary'
                : 'border-gray-200 bg-white text-text hover:border-primary/50'
            }`}
          >
            <span
              className={`mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${
                selected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
              }`}
            >
              {selected && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {option}
          </button>
        );
      })}
    </div>
  );
}
