export function toInt(value: string | number, fallback = 0): number {
  const result = Number.parseInt(String(value), 10);

  return Number.isNaN(result) ? fallback : result;
}
