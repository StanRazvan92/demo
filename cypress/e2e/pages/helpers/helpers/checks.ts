export function isNullOrEmpty(value: string | undefined | null): boolean {
  return value == undefined || value === "";
}
