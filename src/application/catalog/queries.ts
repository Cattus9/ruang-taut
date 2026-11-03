import type { CatalogRepository, SavedLink } from "@/domain/catalog";

export function getCatalog(repository: CatalogRepository) {
  const links = repository.getLinks();
  return { links, categories: repository.getCategories().map((category) => ({ ...category, count: links.filter((link) => link.categoryId === category.id).length })) };
}

export function filterLinks(links: SavedLink[], query: string, category: string, featuredOnly = false) {
  const search = query.toLocaleLowerCase("id").trim();
  return links.filter((link) => (category === "all" || link.categoryId === category) && (!featuredOnly || link.featured) && (!search || [link.title, link.description, ...link.tags].join(" ").toLocaleLowerCase("id").includes(search)));
}
