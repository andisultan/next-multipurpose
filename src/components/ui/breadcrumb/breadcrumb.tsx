import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
};

export function Breadcrumb({ items, separator = "/" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mb-4 flex flex-wrap items-center gap-2 border-b border-line pb-4 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-medium text-gray-900" : ""}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="text-gray-400">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
