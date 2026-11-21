import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ui/button";

export default function MainHeader() {
  return (
    <header className="container m-auto p-6 flex items-center align-middle justify-between">
      <Image src="/execor-logo.svg" loading="eager" width="92" height="20" alt="logo" />
      <nav className="flex items-center gap-8 mr-12 text-gray-900">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/store">Store</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <ButtonLink href="/contact">Contact Us</ButtonLink>
    </header>
  );
}
