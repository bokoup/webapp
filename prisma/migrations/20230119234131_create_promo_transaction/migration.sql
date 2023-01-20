/*
  Warnings:

  - You are about to drop the `CreatePromoTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CreatePromoTransaction";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "StoredTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "payer" TEXT NOT NULL,
    "tx" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
