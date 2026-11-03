import { Suspense } from "react";
import { getCatalog } from "@/application/catalog/queries";
import { seedCatalogRepository } from "@/infrastructure/catalog/seed-repository";
import { CatalogScreen } from "@/components/catalog/catalog-screen";

export const metadata = { title: "Katalog" };

export default function CatalogPage() {
  return <Suspense fallback={<main className="page-frame catalog-loading">Memuat koleksi tautan…</main>}><CatalogScreen catalog={getCatalog(seedCatalogRepository)} /></Suspense>;
}
