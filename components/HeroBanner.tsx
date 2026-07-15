export function HeroBanner() {
  return (
    <div className="mb-8 w-full items-center">
      <div
        className="flex h-[220px] w-full flex-col items-center justify-center sm:h-[260px]"
        style={{
          background: 'linear-gradient(135deg, #8EB8BC 0%, #5E969E 100%)',
        }}
      >
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white opacity-90">
          Questionnaire
        </p>
        <p className="mb-4 text-3xl font-bold tracking-widest text-white sm:text-4xl">
          患者さまアンケート
        </p>
        <div className="mb-6 h-[2px] w-12 bg-white/50" />
        <p className="whitespace-pre-line px-6 text-center text-sm leading-relaxed text-white opacity-90 sm:text-base">
          {'より良い医療サービスの提供のため、\n率直なご意見をお聞かせください'}
        </p>
      </div>
    </div>
  );
}
