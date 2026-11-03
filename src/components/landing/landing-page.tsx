"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Search, Shuffle, Menu, Asterisk } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Brand } from "@/components/shared/brand";
import { LinkCover } from "@/components/catalog/link-cover";
import { site } from "@/config/site";
import type { getCatalog } from "@/application/catalog/queries";

type Catalog = ReturnType<typeof getCatalog>;

export function LandingPage({ catalog }: { catalog: Catalog }) {
  const featured = catalog.links.filter((link) => link.featured);
  function surprise() {
    const link = catalog.links[Math.floor(Math.random() * catalog.links.length)];
    window.open(link.url, "_blank", "noopener,noreferrer");
  }
  return <>
    <header className="site-header page-frame">
      <Brand />
      <nav aria-label="Navigasi utama" className="desktop-nav">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Button render={<Link href="/catalog" />} className="header-action" variant="secondary">Buka koleksi <ArrowUpRight /></Button>
      <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="mobile-menu" aria-label="Buka navigasi" />}><Menu /></SheetTrigger><SheetContent><SheetHeader><SheetTitle>{site.name}</SheetTitle></SheetHeader><nav className="mobile-nav">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></SheetContent></Sheet>
    </header>
    <main>
      <section className="hero-stage page-frame" aria-labelledby="hero-title">
        <div className="discovery-wall" data-ui aria-label="Pratinjau koleksi link">{[...featured, ...featured].map((link, index) => <div className="wall-item" key={`${link.id}-${index}`} aria-hidden="true"><LinkCover link={link} /><div className="wall-caption">{link.title}<ArrowUpRight /></div></div>)}</div>
        <div className="hero-paper">
          <div className="paper-top"><Asterisk aria-hidden="true" /></div>
          <h1 id="hero-title">{site.hero.title}</h1>
          <p className="hero-description">{site.hero.description}</p>
          <Button render={<Link href="/catalog" />} className="hero-action">{site.hero.action}<ArrowRight /></Button>
          <div className="paper-bottom"><span>Design, development & vibecoding.</span><span>{catalog.links.length} tautan pilihan</span></div>
        </div>
        <div className="hero-bottom"><span>Tools dan referensi dalam satu katalog.</span><a href="#pilihan" aria-label="Lihat referensi pilihan"><ArrowDown /></a><span>Cari berdasarkan topik dan kategori.</span></div>
      </section>
      <section className="featured-section page-frame" id="pilihan" aria-labelledby="featured-title">
        <div className="section-heading"><div><h2 id="featured-title">Referensi pilihan</h2><p>Dari inspirasi antarmuka hingga tools untuk menulis kode dan deploy.</p></div><Link href="/catalog" className="text-link">Lihat semua tautan <ArrowUpRight /></Link></div>
        <div className="featured-layout" data-ui>
          <a className="featured-main" href={featured[0].url} target="_blank" rel="noopener noreferrer"><LinkCover link={featured[0]} /><div className="featured-info"><div><span className="meta">Inspirasi desain</span><h3>{featured[0].title}</h3><p>{featured[0].description}</p></div><ArrowUpRight /></div></a>
          <div className="featured-stack">{featured.slice(1).map((link) => <a href={link.url} key={link.id} className="featured-row" target="_blank" rel="noopener noreferrer"><LinkCover link={link} /><div><span className="meta">{catalog.categories.find((category) => category.id === link.categoryId)?.name}</span><h3>{link.title}</h3><p>{link.description}</p></div><ArrowUpRight /></a>)}</div>
        </div>
      </section>
      <section className="category-section page-frame" id="kategori" aria-labelledby="category-title"><div className="category-intro"><h2 id="category-title">Pilih sesuai<br />kebutuhan.</h2><p>Telusuri referensi berdasarkan fokusmu: desain UI, development, tools AI, atau materi belajar.</p><Button variant="secondary" onClick={surprise}><Shuffle />Buka tautan acak</Button></div><div className="category-list">{catalog.categories.map((category) => <Link key={category.id} href={`/catalog?category=${category.id}`} className="category-row"><div><h3>{category.name}</h3><p>{category.description}</p></div><span className="category-count">{category.count} tautan</span><ArrowUpRight /></Link>)}</div></section>
      <section className="search-section page-frame" aria-labelledby="search-title"><div><h2 id="search-title">Cari referensi<br />untuk proyekmu.</h2><p>Cari nama tool, teknologi, atau topik melalui judul, deskripsi, dan tag.</p></div><form action="/catalog" className="landing-search"><label htmlFor="discovery-search">Nama tool atau topik</label><div className="search-input-row"><Search aria-hidden="true" /><Input id="discovery-search" name="q" placeholder="Contoh: React, AI, deployment..." /><Button type="submit" size="icon" aria-label="Cari di katalog"><ArrowRight /></Button></div><div className="search-suggestions">{["Deployment", "React", "Open source"].map((term) => <Link href={`/catalog?q=${encodeURIComponent(term)}`} key={term}>{term}<ArrowUpRight /></Link>)}</div></form></section>
      <section id="tentang" className="about-section page-frame" aria-labelledby="about-title"><h2 id="about-title">Satu katalog.<br />Referensi terpusat.</h2><div><p>Ruang Taut mengumpulkan link tools, dokumentasi, komponen UI, dan referensi desain yang sebelumnya tersebar di bookmark, chat, dan berbagai platform.</p><p>Setiap tautan dilengkapi deskripsi, kategori, dan tag. Kamu bisa menelusuri koleksi, mencari topik tertentu, lalu langsung membuka sumber aslinya—untuk coding manual maupun vibecoding.</p><Link href="/catalog" className="text-link">Buka katalog referensi <ArrowUpRight /></Link></div></section>
    </main>
    <footer className="site-footer page-frame"><Link href="/" className="footer-wordmark">Ruang Taut.</Link><div className="footer-bottom"><span>Tools, dokumentasi, dan referensi untuk build.</span><Link href="/catalog">Jelajahi katalog</Link><a href="#">Kembali ke atas ↑</a></div></footer>
  </>;
}
