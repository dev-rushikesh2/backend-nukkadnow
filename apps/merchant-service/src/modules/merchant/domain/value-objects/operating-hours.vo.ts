export interface OperatingSlot {
  dayOfWeek: number; // 0 = Sunday, 1 = Monday ... 6 = Saturday
  openTime: string;  // "HH:mm" e.g. "09:00"
  closeTime: string; // "HH:mm" e.g. "21:30"
  isClosed: boolean;
}

export class OperatingHours {
  constructor(private readonly slots: OperatingSlot[]) {
    this.validateSlots();
  }

  getSlots(): OperatingSlot[] {
    return [...this.slots];
  }

  isOpenAt(date: Date): boolean {
    const day = date.getDay();
    const currentSlot = this.slots.find(s => s.dayOfWeek === day);
    if (!currentSlot || currentSlot.isClosed) return false;

    const currentMinutes = date.getHours() * 60 + date.getMinutes();
    const [openH, openM] = currentSlot.openTime.split(":").map(Number);
    const [closeH, closeM] = currentSlot.closeTime.split(":").map(Number);

    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }

  private validateSlots(): void {
    for (const slot of this.slots) {
      if (slot.dayOfWeek < 0 || slot.dayOfWeek > 6) {
        throw new Error(`Invalid dayOfWeek: ${slot.dayOfWeek}`);
      }
      if (!slot.isClosed) {
        if (!slot.openTime || !slot.closeTime) {
          throw new Error("Open and close times are required for open slots.");
        }
        const [openH, openM] = slot.openTime.split(":").map(Number);
        const [closeH, closeM] = slot.closeTime.split(":").map(Number);
        if (openH * 60 + openM >= closeH * 60 + closeM) {
          throw new Error(`Closing time (${slot.closeTime}) must be after opening time (${slot.openTime})`);
        }
      }
    }
  }
}
