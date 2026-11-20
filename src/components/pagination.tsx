import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  pageParam?: string;
  query?: Record<string, string | undefined>;
};

function buildHref(
  basePath: string,
  page: number,
  pageParam: string,
  query: Record<string, string | undefined>,
) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value) params.set(key, value);
  }
  if (page > 1) params.set(pageParam, String(page));

  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  pageParam = "page",
  query = {},
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const hrefFor = (page: number) => buildHref(basePath, page, pageParam, query);

  return (
    <nav aria-label="Pagination">
      {currentPage > 1 && (
        <Link href={hrefFor(currentPage - 1)} rel="prev">
          Sebelumnya
        </Link>
      )}
      <span aria-current="page">
        Halaman {currentPage} dari {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={hrefFor(currentPage + 1)} rel="next">
          Berikutnya
        </Link>
      )}
    </nav>
  );
}
