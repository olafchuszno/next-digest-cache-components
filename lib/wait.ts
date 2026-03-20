export function wait(delay: number = 200): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay));
}
