import { cacheLife } from "next/cache";

// Cached so the static shell can be prerendered; refreshed daily.
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
