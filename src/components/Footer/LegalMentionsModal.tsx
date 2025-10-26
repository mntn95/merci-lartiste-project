import React from "react";
import { legalMentionsLabels } from "../../base-components/Modal/labels";
import { ArticleSection, Paragraph } from "../../base-components";

const LegalMentionsModal: React.FC = () => {
  const { cguTitle, effectiveDate, introText, articles } = legalMentionsLabels;

  return (
    <>
      <div className="pt-4 flex flex-col items-center justify-center">
        <h2 className="text-center flex items-center justify-center text-xl uppercase">
          {cguTitle}
        </h2>
        <span>{effectiveDate}</span>
      </div>

      <div className="text-sm flex items-start justify-center flex-col mx-auto w-[90%] pb-12">
        <div className="pt-4">
          <Paragraph>{introText}</Paragraph>
        </div>

        {articles.map((article, index) => (
          <ArticleSection key={index} title={article.title}>
            {article.content.map((paragraph, paragraphIndex) => (
              <Paragraph key={paragraphIndex}>{paragraph}</Paragraph>
            ))}
          </ArticleSection>
        ))}
      </div>
    </>
  );
};

export default LegalMentionsModal;
