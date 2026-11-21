import { UserRound } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";

export default function DesignSystem() {
  return (
    <main className="container m-auto px-24">
      <h1>Button</h1>
      <div className="flex gap-3">
        <Button disabled>Button</Button>
        <Button isLoading>Button</Button>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
        <Button size="icon" aria-label="Icon" className="rounded-full">
          <UserRound />
        </Button>
        <ButtonLink href="/" size="sm">
          Button
        </ButtonLink>
        <ButtonLink href="/" size="md">
          Button
        </ButtonLink>
        <ButtonLink href="/" size="lg">
          Button
        </ButtonLink>
        <ButtonLink href="/" size="icon" aria-label="Icon">
          A
        </ButtonLink>
      </div>
    </main>
  );
}
