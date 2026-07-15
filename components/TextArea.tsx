'use client';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
};

export function TextArea({ value, onChange, placeholder, hasError }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-base ${
        hasError ? 'border-error' : 'border-gray-200'
      }`}
    />
  );
}
