import type { SavedLink } from "@/domain/catalog";

const coverContent: Record<SavedLink["cover"], { title: string; detail: string; mark: string }> = {
  awwwards: { title: "awwwards.", detail: "Web design & interaction", mark: "W." },
  shadcn: { title: "shadcn/ui", detail: "Open source React components", mark: "↗" },
  cursor: { title: "Cursor", detail: "AI-powered code editor", mark: "⌘" },
  vercel: { title: "Vercel", detail: "Web deployment platform", mark: "▲" },
  fonts: { title: "Aa Bb Cc", detail: "Open source fonts for the web", mark: "Ag" },
  mdn: { title: "MDN Web Docs", detail: "HTML, CSS & JavaScript", mark: "{ }" },
  framer: { title: "Framer", detail: "Visual website builder", mark: "F" },
  react: { title: "React", detail: "Component-based interfaces", mark: "◉" },
};

export function LinkCover({ link }: { link: SavedLink }) {
  const content = coverContent[link.cover];
  return <div className={`link-cover cover-${link.cover}`} role="img" aria-label={`Sampul editorial ${link.title}`}><span className="cover-mark" aria-hidden="true">{content.mark}</span><div><span className="cover-title">{content.title}</span><span className="cover-detail">{content.detail}</span></div></div>;
}
