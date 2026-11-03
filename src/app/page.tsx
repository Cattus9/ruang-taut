import { getCatalog } from "@/application/catalog/queries";
import { seedCatalogRepository } from "@/infrastructure/catalog/seed-repository";
import { LandingPage } from "@/components/landing/landing-page";

export default function Home() {
  return <LandingPage catalog={getCatalog(seedCatalogRepository)} />;
}
