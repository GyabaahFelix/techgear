// app/deals/page.tsx
import DealsClient from "@/components/DealsClient";

export const dynamic = "force-dynamic";

export default async function DealsPage() {
  const categoryId = process.env.DEALS_CATEGORY_ID;

  if (!categoryId) {
    throw new Error("Missing DEALS_CATEGORY_ID");
  }

  return <DealsClient categoryId={categoryId} />;
}
