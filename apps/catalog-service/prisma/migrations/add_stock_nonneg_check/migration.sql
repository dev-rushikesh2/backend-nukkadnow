-- Migration: add_stock_nonneg_check
-- Prevents onHandQuantity from ever going negative at the database level.
-- The application layer already guards this in the atomic UPDATE query,
-- but a DB CHECK is the last line of defence.

ALTER TABLE "stock_balances"
  ADD CONSTRAINT "stock_balances_on_hand_nonneg"
  CHECK ("onHandQuantity" >= 0);

ALTER TABLE "stock_balances"
  ADD CONSTRAINT "stock_balances_reserved_nonneg"
  CHECK ("reservedQuantity" >= 0);

ALTER TABLE "stock_balances"
  ADD CONSTRAINT "stock_balances_reserved_lte_onhand"
  CHECK ("reservedQuantity" <= "onHandQuantity");
