export class FeatureFlagService {
  private flags: Map<string, boolean> = new Map();

  constructor(initialFlags: Record<string, boolean> = {}) {
    for (const [k, v] of Object.entries(initialFlags)) {
      this.flags.set(k, v);
    }
  }

  isEnabled(flagName: string): boolean {
    return this.flags.get(flagName) ?? false;
  }

  setFlag(flagName: string, enabled: boolean): void {
    this.flags.set(flagName, enabled);
  }
}
