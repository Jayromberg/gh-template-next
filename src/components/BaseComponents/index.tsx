import React from "react";

interface BaseComponentProps {
  children?: React.ReactNode;
  tag: "main" | "header" | "article" | "section" | "form" | "ul" | string;
  className?: string;
  src?: string;
  alt?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  htmlFor?: string;
  ref?: React.RefObject<HTMLElement>;
  href?: string;
  viewBox?: string;
  xmlns?: string;
}
const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  ({ tag, className, children, ...props }, ref) => {
    const Tag = tag;
    const cls = `flex flex-col content-start shrink-0 ${className}`;

    return React.createElement(
      Tag,
      {
        className: cls,
        ref,
        ...props,
      },
      children
    );
  }
);

BaseComponent.defaultProps = {
  tag: "div",
  className: "",
};

export default BaseComponent;
