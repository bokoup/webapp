import type { StoredTransaction } from "@prisma/client";

import { prisma } from "~/db.server";

export type { StoredTransaction } from "@prisma/client";

export function getStoredTransaction({
  id,
  payer,
}: Pick<StoredTransaction, "id" | "payer">) {
  return prisma.storedTransaction.findFirst({
    select: { id: true, tx: true, message: true },
    where: { id, payer },
  });
}

export function createStoredTransaction({
  payer,
  tx,
  message,
}: Pick<StoredTransaction, "payer" | "tx" | "message">) {
  return prisma.storedTransaction.create({
    data: {
      payer,
      tx,
      message,
    },
  });
}

export function deleteStoredTransaction({ id }: Pick<StoredTransaction, "id">) {
  return prisma.storedTransaction.delete({
    where: { id },
  });
}
