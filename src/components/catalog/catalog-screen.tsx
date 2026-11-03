"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Search, Library, Star, Palette, Code, Sparkles, Type, Layers, BookOpen, Menu, LayoutGrid, List, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Brand } from "@/components/shared/brand";
import { LinkCover } from "@/components/catalog/link-cover";
import { filterLinks, type getCatalog } from "@/application/catalog/queries";

const icons = { palette: Palette, code: Code, sparkles: Sparkles, type: Type, layers: Layers, book: BookOpen };
type Catalog = ReturnType<typeof getCatalog>;

export function CatalogScreen({ catalog }: { catalog: Catalog }) {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("q") ?? "";
  const requestedCategory = params.get("category") ?? "all";
  const category = catalog.categories.some((item) => item.id === requestedCategory) ? requestedCategory : "all";
  const featured = params.get("featured") === "true";
  const [view, setView] = useState<"grid" | "list">("grid");
  const [menuOpen, setMenuOpen] = useState(false);
  const links = filterLinks(catalog.links, query, category, featured);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value); else next.delete(key);
    router.replace(`/catalog${next.size ? `?${next}` : ""}`, { scroll: false });
  }
  function selectCategory(id: string) {
    const next = new URLSearchParams(params.toString());
    next.delete("featured");
    if (id === "all") next.delete("category"); else next.set("category", id);
    router.replace(`/catalog?${next}`, { scroll: false });
    setMenuOpen(false);
  }
  const navigation = <><div className="sidebar-search"><Search /><Input aria-label="Cari tautan" placeholder="Cari tautan..." value={query} onChange={(event) => update("q", event.target.value)} /></div><nav className="catalog-navigation" aria-label="Kategori tautan"><Button variant="ghost" className={category === "all" && !featured ? "nav-item is-active" : "nav-item"} onClick={() => selectCategory("all")}><Library />Semua tautan<span>{catalog.links.length}</span></Button><Button variant="ghost" className={featured ? "nav-item is-active" : "nav-item"} onClick={() => { update("featured", featured ? "" : "true"); setMenuOpen(false); }}><Star />Pilihan kurator<span>{catalog.links.filter((link) => link.featured).length}</span></Button><p className="nav-group-title">Kategori</p>{catalog.categories.map((item) => { const Icon = icons[item.icon]; return <Button key={item.id} variant="ghost" className={category === item.id ? "nav-item is-active" : "nav-item"} onClick={() => selectCategory(item.id)}><Icon />{item.name}<span>{item.count}</span></Button>; })}</nav><div className="sidebar-note"><p>Temuan bagus,<br />tersimpan dengan rapi.</p><Link href="/">Tentang Ruang Taut <ArrowUpRight /></Link></div></>;
  return <div className="catalog-shell" data-ui><aside className="catalog-sidebar"><Brand />{navigation}</aside><div className="catalog-body"><header className="catalog-topbar"><Link href="/" className="back-link"><ArrowLeft />Beranda</Link><span>Koleksi publik / Katalog</span><Sheet open={menuOpen} onOpenChange={setMenuOpen}><SheetTrigger render={<Button variant="ghost" size="icon" className="mobile-menu" aria-label="Buka kategori" />}><Menu /></SheetTrigger><SheetContent side="left"><SheetHeader><SheetTitle>Kategori Ruang Taut</SheetTitle></SheetHeader><div className="mobile-catalog-nav">{navigation}</div></SheetContent></Sheet></header><main className="catalog-main"><div className="catalog-title"><div><h1>{featured ? "Pilihan kurator" : category === "all" ? "Semua tautan" : catalog.categories.find((item) => item.id === category)?.name}</h1><p>Tools, inspirasi, dan bacaan untuk ide berikutnya.</p></div><Badge variant="secondary">{links.length} tautan</Badge></div><div className="catalog-toolbar"><div className="catalog-search"><Search /><Input aria-label="Cari dalam koleksi" placeholder="Cari sesuatu yang menarik..." value={query} onChange={(event) => update("q", event.target.value)} />{query && <Button variant="ghost" size="icon" aria-label="Hapus pencarian" onClick={() => update("q", "")}><X /></Button>}</div><div className="view-controls"><Button variant={view === "grid" ? "secondary" : "ghost"} size="icon" aria-label="Tampilan grid" aria-pressed={view === "grid"} onClick={() => setView("grid")}><LayoutGrid /></Button><Button variant={view === "list" ? "secondary" : "ghost"} size="icon" aria-label="Tampilan daftar" aria-pressed={view === "list"} onClick={() => setView("list")}><List /></Button></div></div><p className="catalog-results" aria-live="polite">{query ? `Hasil untuk “${query}” · ` : ""}{links.length} dari {catalog.links.length} tautan</p>{links.length ? <div className={`catalog-links ${view === "list" ? "list-view" : ""}`}>{links.map((link) => <Card key={link.id} className="catalog-card"><a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Kunjungi ${link.title} (tab baru)`}><LinkCover link={link} /><CardContent className="catalog-card-content"><div className="card-title-row"><h2>{link.title}</h2><ArrowUpRight /></div><span className="meta">{new URL(link.url).hostname.replace("www.", "")}</span><p>{link.description}</p><div className="card-tags">{link.tags.map((tag) => <Badge variant="secondary" key={tag}>{tag}</Badge>)}</div></CardContent></a></Card>)}</div> : <div className="catalog-empty"><Search /><h2>Belum menemukan yang cocok.</h2><p>Coba kata lain atau jelajahi semua kategori.</p><Button variant="secondary" onClick={() => router.replace("/catalog")}>Reset pencarian</Button></div>}<footer className="catalog-footer"><span>Koleksi awal · data contoh</span><Link href="/">Ruang Taut</Link></footer></main></div></div>;
}
