import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

type Menus = {
  href: string;
  title: string;
};

const menus: Menus[] = [
  { href: "/services", title: "Services" },
  { href: "/about", title: "About" },
  { href: "/case-studies", title: "Case Studies" },
  { href: "/team", title: "Team" },
  { href: "/blog", title: "Blog" },
  { href: "/careers", title: "Careers" },
  { href: "/contact", title: "Contact" },
  { href: "/press-release", title: "Press Release" },
];

export default function MainFooter() {
  return (
    <footer className="bg-primary text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
          <div className="flex flex-col gap-6">
            <Image loading="lazy" src="/execor-logo-white.svg" width="92" height="20" alt="logo" />
            <p>
              Strategic <span className="text-secondary">Insights</span>. Lasting{" "}
              <span className="text-secondary">Impact</span>.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-400 pb-1">Company</h3>
            <ul className="grid grid-cols-2 gap-2">
              {menus.map((menu) => (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className="transition-color hover:text-secondary"
                >
                  {menu.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-400 pb-1">Contact</h3>
              <p>
                <span className="text-secondary">P:</span>{" "}
                <a
                  href="texl:1-800-356-8933"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-color hover:text-secondary"
                >
                  1-800-356-8933
                </a>
              </p>
              <p>
                <span className="text-secondary">E:</span>{" "}
                <a
                  href="mailto:info@execor.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-color hover:text-secondary"
                >
                  info@execor.com
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-400 pb-1">Address</h3>
              <p>Seventh Ave, 20th Floor, New York, NY 10018</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center text-sm text-gray-400 border-t border-line-light pt-8 mt-8">
          <p>2026 © YourSite. All rights reserved.</p>
          <ul className="flex gap-2 items-center">
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
