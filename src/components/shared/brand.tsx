import Link from "next/link";
import { Asterisk } from "lucide-react";
import { site } from "@/config/site";

export function Brand() {
  return <Link href="/" className="brand" aria-label={`${site.name} — beranda`}><Asterisk aria-hidden="true" /><span>{site.name}<span className="brand-dot">.</span></span></Link>;
}
