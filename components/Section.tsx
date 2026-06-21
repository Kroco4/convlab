import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`w-full px-5 py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}
