import React from "react";
import Header from "./header/Header";

type Props = {
  children: any;
};

const LayoutProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutProvider;
