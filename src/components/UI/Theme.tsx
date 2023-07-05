import React, { Fragment, ReactNode } from "react";

interface Props{
    children: ReactNode
}

const Theme: React.FC<Props> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default React.memo(Theme);
