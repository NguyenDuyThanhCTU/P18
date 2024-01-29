import React from "react";

const Introduction = ({ Data }: any) => {
  const markup = { __html: Data?.content };
  return (
    <>
      {markup && (
        <div dangerouslySetInnerHTML={markup} className="text-[18px]"></div>
      )}
    </>
  );
};

export default Introduction;
