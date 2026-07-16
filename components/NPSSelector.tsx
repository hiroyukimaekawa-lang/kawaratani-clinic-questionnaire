'use client';

type Props = {
  value: number | null;
  onChange: (score: number) => void;
};

const scoreOptions = Array.from({ length: 10 }, (_, idx) => idx + 1);

export function NPSSelector({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <div className="flex w-full flex-wrap justify-between gap-y-2 px-1">
        {scoreOptions.map((score) => {
          const selected = value === score;
          return (
            <button
              type="button"
              key={score}
              onClick={() => onChange(score)}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-colors sm:h-10 sm:w-10 sm:text-sm ${
                selected
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-300 bg-white text-primary hover:border-primary'
              }`}
            >
              {score}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center px-1">
        <span className="text-[10px] text-gray-400">→</span>
        <div className="mx-1 h-px flex-1 bg-gray-200" />
        <span className="text-[10px] text-gray-400">←</span>
      </div>

      <div className="mt-1 flex items-center justify-between px-1">
        <span className="text-[11px] text-gray-500">非常に不満</span>
        <span className="text-[11px] text-gray-500">非常に満足</span>
      </div>
    </div>
  );
}
