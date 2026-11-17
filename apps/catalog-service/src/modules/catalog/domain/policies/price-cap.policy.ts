import { AdminPriceCapRule } from "../entities/price-cap.entity";
import { Money } from "@nukkadnow/platform-kernel";

export interface PriceValidationContext {
  productName: string;
  category: string;
  subCategory?: string;
  locality?: string;
  sku?: string;
  pricePaise: number;
  compareAtPricePaise?: number;
}

export interface PriceValidationResult {
  isValid: boolean;
  violationReason?: string;
  applicableCapPaise?: number;
  applicableCapFormatted?: string;
  ruleId?: string;
}

export class PriceCapPolicy {
  /**
   * Enforces that selling price does not exceed printed MRP (Legal Metrology Act)
   * and does not breach any active Platform Admin Price Caps.
   */
  static evaluate(context: PriceValidationContext, activeRules: AdminPriceCapRule[]): PriceValidationResult {
    // 1. MRP Verification: Selling price cannot exceed Manufacturer Max Retail Price
    if (context.compareAtPricePaise && context.pricePaise > context.compareAtPricePaise) {
      const mrpMoney = Money.fromPaise(context.compareAtPricePaise);
      const priceMoney = Money.fromPaise(context.pricePaise);
      return {
        isValid: false,
        violationReason: `Selling price (${priceMoney.format()}) exceeds the printed MRP (${mrpMoney.format()}). Under platform policy & Legal Metrology, selling above MRP is prohibited.`,
        applicableCapPaise: context.compareAtPricePaise,
        applicableCapFormatted: mrpMoney.format(),
      };
    }

    // 2. Platform Admin Price Caps Evaluation
    // Find all rules that match this product's scope
    const matchingRules = activeRules.filter(rule => {
      if (!rule.isActive) return false;

      switch (rule.scope) {
        case "SPECIFIC_PRODUCT":
          return context.sku && rule.targetKey.toLowerCase() === context.sku.toLowerCase();
        case "SUB_CATEGORY":
          return context.subCategory && rule.targetKey.toLowerCase() === context.subCategory.toLowerCase();
        case "CATEGORY":
          return rule.targetKey.toLowerCase() === context.category.toLowerCase() || rule.targetKey === "*";
        case "LOCALITY":
          return context.locality && rule.targetKey.toLowerCase() === context.locality.toLowerCase();
        case "GLOBAL":
          return true;
        default:
          return false;
      }
    });

    if (matchingRules.length === 0) {
      return { isValid: true };
    }

    // If multiple caps match, the strictest (lowest maximum price) takes precedence
    matchingRules.sort((a, b) => a.maxPricePaise - b.maxPricePaise);
    const strictestRule = matchingRules[0];

    if (context.pricePaise > strictestRule.maxPricePaise) {
      const capMoney = Money.fromPaise(strictestRule.maxPricePaise);
      const priceMoney = Money.fromPaise(context.pricePaise);
      return {
        isValid: false,
        ruleId: strictestRule.id,
        applicableCapPaise: strictestRule.maxPricePaise,
        applicableCapFormatted: capMoney.format(),
        violationReason: `Selling price (${priceMoney.format()}) exceeds the Platform Price Cap of ${capMoney.format()} for category "${context.category}". Reason: ${strictestRule.reason}`,
      };
    }

    return {
      isValid: true,
      applicableCapPaise: strictestRule.maxPricePaise,
      applicableCapFormatted: Money.fromPaise(strictestRule.maxPricePaise).format(),
    };
  }
}
