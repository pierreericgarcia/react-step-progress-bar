export function getSafePercent(percent: number) {
  if (percent > 100 || percent < 0 || typeof percent !== 'number') {
    console.warn(
      `[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`,
    );
  }
  return Math.min(100, Math.max(percent, 0));
}

export function getStepPosition(steps: number, stepIndex: number, hasStepZero: boolean) {
  if (hasStepZero) {
    return (100 / (steps - 1)) * stepIndex;
  }
  return (100 / steps) * (stepIndex + 1);
}
