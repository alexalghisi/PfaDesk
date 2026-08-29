import { AUTHOR } from "@/lib/contact";

export function AuthorCredit() {
  return (
    <address
      className="mt-4 max-w-6xl px-2 text-center text-[13px] not-italic leading-relaxed text-foreground/70"
      data-testid="author-credit"
    >
      <span className="font-medium text-foreground/85">{AUTHOR.name}</span>
      {" · "}
      {AUTHOR.title}
      {" · "}
      {AUTHOR.location}
      <br />
      <a className="underline-offset-2 hover:underline" href={AUTHOR.github}>
        {AUTHOR.githubLabel}
      </a>
      {" · "}
      <a className="underline-offset-2 hover:underline" href={AUTHOR.linkedin}>
        {AUTHOR.linkedinLabel}
      </a>
      {" · "}
      <a className="underline-offset-2 hover:underline" href={`mailto:${AUTHOR.email}`}>
        {AUTHOR.email}
      </a>
    </address>
  );
}
