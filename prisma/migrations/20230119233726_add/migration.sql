/*
  Warnings:

  - Added the required column `updatedAt` to the `CreatePromoTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CreatePromoTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "payer" TEXT NOT NULL,
    "tx" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_CreatePromoTransaction" ("id", "message", "payer", "tx") SELECT "id", "message", "payer", "tx" FROM "CreatePromoTransaction";
DROP TABLE "CreatePromoTransaction";
ALTER TABLE "new_CreatePromoTransaction" RENAME TO "CreatePromoTransaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
