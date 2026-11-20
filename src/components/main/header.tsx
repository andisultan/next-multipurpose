import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="container m-auto p-6 flex items-center align-middle justify-between">
      <Image src="/execor-logo.svg" width="92" height="20" alt="logo" />
      <nav className="flex items-center gap-8 mr-12 text-gray-900">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/store">Store</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link
        href="/contact"
        className="py-3 px-6 rounded-md font-medium bg-secondary text-primary inline-flex text-sm"
      >
        Contact Us
      </Link>
    </header>
  );
}
