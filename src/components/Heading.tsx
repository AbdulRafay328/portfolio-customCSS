import React from "react";

type MyComponentProps = {
  showParagraph?: boolean;
  heading?: string;
  headline?: string;
};

function Heading({
  showParagraph = true,
  heading,
  headline,
}: MyComponentProps) {
  return (
    <>
      <div className="heading-container">
        <div className="heading-text">
          {heading}
        </div>
      </div>

      {showParagraph && (
        <p className="paragraph">
          {headline}
        </p>
      )}
    </>
  );
}

export default Heading;
