import { v4 as uuidv4, v7 as uuidv7 } from "uuid";

export class UniqueIdentifier {
  static generateV7(): string {
    return uuidv7();
  }

  static generateV4(): string {
    return uuidv4();
  }

  static isValid(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-7][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
