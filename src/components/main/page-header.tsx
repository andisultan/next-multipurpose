import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem, Container } from "@/components/ui";
import { cn } from "@/utils/cn";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
};

export function PageHeader({ title, description, breadcrumbs, className }: PageHeaderProps) {
  return (
    <header className={cn("flex min-h-92.5 pt-28 center bg-tertiary", className)}>
      <Container>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <h1 className="mt-4 pb-2 font-forum text-5xl">{title}</h1>
        {description && <p className="max-w-160">{description}</p>}
      </Container>
    </header>
  );
}
