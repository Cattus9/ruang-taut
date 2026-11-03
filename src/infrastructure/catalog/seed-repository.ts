import type { CatalogRepository, Category, SavedLink } from "@/domain/catalog";

const categories: Category[] = [
  { id: "design", name: "Inspirasi desain", description: "Referensi layout, interaksi, dan desain website.", icon: "palette" },
  { id: "development", name: "Development", description: "Framework, library, dan platform deployment.", icon: "code" },
  { id: "ai", name: "AI & vibecoding", description: "Editor dan tools AI untuk membantu menulis kode.", icon: "sparkles" },
  { id: "typography", name: "Tipografi", description: "Koleksi font dan referensi tipografi untuk UI.", icon: "type" },
  { id: "components", name: "Komponen UI", description: "Komponen siap adaptasi untuk membangun antarmuka.", icon: "layers" },
  { id: "learning", name: "Bacaan & belajar", description: "Dokumentasi, tutorial, dan konsep web development.", icon: "book" },
];

const links: SavedLink[] = [
  { id: "awwwards", title: "Awwwards", description: "Galeri website untuk mempelajari referensi layout, animasi, dan interaksi antarmuka.", url: "https://www.awwwards.com", categoryId: "design", tags: ["Website", "Inspirasi"], featured: true, addedAt: "2026-11-03", cover: "awwwards" },
  { id: "shadcn", title: "shadcn/ui", description: "Komponen UI open source untuk React dengan source code yang bisa diubah sesuai kebutuhan proyek.", url: "https://ui.shadcn.com", categoryId: "components", tags: ["Open source", "React"], featured: true, addedAt: "2026-11-02", cover: "shadcn" },
  { id: "cursor", title: "Cursor", description: "Editor kode dengan AI untuk menjelajahi ide dan membangun langsung di codebase.", url: "https://cursor.com", categoryId: "ai", tags: ["AI", "Editor"], featured: true, addedAt: "2026-11-01", cover: "cursor" },
  { id: "vercel", title: "Vercel", description: "Platform deployment aplikasi web dengan integrasi Git dan preview untuk setiap perubahan.", url: "https://vercel.com", categoryId: "development", tags: ["Deployment", "Web"], featured: true, addedAt: "2026-10-31", cover: "vercel" },
  { id: "fonts", title: "Google Fonts", description: "Katalog font open source yang bisa difilter, diuji, dan digunakan pada website.", url: "https://fonts.google.com", categoryId: "typography", tags: ["Gratis", "Font"], featured: false, addedAt: "2026-10-30", cover: "fonts" },
  { id: "mdn", title: "MDN Web Docs", description: "Referensi HTML, CSS, dan JavaScript untuk memahami cara web bekerja.", url: "https://developer.mozilla.org", categoryId: "learning", tags: ["Dokumentasi", "Web"], featured: false, addedAt: "2026-10-29", cover: "mdn" },
  { id: "framer", title: "Framer", description: "Eksplorasi layout, animasi, dan website yang dirancang secara visual.", url: "https://www.framer.com", categoryId: "design", tags: ["No code", "Website"], featured: false, addedAt: "2026-10-28", cover: "framer" },
  { id: "react", title: "React", description: "Pelajari fondasi membangun antarmuka dari komponen yang saling terhubung.", url: "https://react.dev", categoryId: "development", tags: ["Open source", "JavaScript"], featured: false, addedAt: "2026-10-27", cover: "react" },
];

export const seedCatalogRepository: CatalogRepository = {
  getCategories: () => categories.map((category) => ({ ...category })),
  getLinks: () => links.map((link) => ({ ...link, tags: [...link.tags] })),
};
