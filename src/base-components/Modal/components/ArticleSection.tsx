import React from "react";
import { Heading } from "../..";

interface ArticleSectionProps {
  title: string;
  children: React.ReactNode;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, children }) => (
  <>
    <Heading as="h3" size="xl" className="uppercase pt-4">
      {title}
    </Heading>
    <div>{children}</div>
  </>
);

export default ArticleSection;
