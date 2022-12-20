import { ReactNode } from "react";

type SectionProps = {
  title?: string, // ? : optional
  children: ReactNode
}

// props 순서 상관없음
export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
