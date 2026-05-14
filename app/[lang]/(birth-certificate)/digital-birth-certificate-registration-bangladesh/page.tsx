import React from "react";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

const page = () => {
  return <div>page</div>;
};

export default page;
