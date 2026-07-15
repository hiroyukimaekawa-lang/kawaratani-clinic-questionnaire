'use client';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  className?: string;
};

export function SubmitButton({ title, onPress, disabled, className }: Props) {
  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled}
      className={`items-center justify-center rounded-full bg-primary py-4 text-center text-base font-bold text-white transition-opacity disabled:opacity-50 ${
        className ?? ''
      }`}
    >
      {disabled ? '送信中…' : title}
    </button>
  );
}
