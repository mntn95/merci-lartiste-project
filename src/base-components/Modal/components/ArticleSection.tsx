import React from "react";

interface ArticleSectionProps {
  title: string;
  children: React.ReactNode;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, children }) => (
    <>
      <h3 className="pt-4 text-xl uppercase">{title}</h3>
      <div>{children}</div>
    </>
  );

export default ArticleSection;
