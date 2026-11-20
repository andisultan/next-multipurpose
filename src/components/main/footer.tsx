import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container m-auto px-6">
        <Image loading="lazy" src="/execor-logo-white.svg" width="92" height="20" alt="logo" />
      </div>
    </footer>
  );
}
