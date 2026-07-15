export function FormError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-2 text-xs font-medium text-error">{error}</p>;
}
