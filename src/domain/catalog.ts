export interface Category { id: string; name: string; description: string; icon: "palette" | "code" | "sparkles" | "type" | "layers" | "book" }
export interface SavedLink { id: string; title: string; description: string; url: string; categoryId: string; tags: string[]; featured: boolean; addedAt: string; cover: "vercel" | "shadcn" | "awwwards" | "cursor" | "fonts" | "mdn" | "framer" | "react" }
export interface CatalogRepository { getCategories(): Category[]; getLinks(): SavedLink[] }
