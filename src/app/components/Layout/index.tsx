import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
  gap: "null" | "small" | "medium" | "large";
}

// Add parent class for sub-components
export const Layout: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${
        styles[`gap-${props.gap}`]
      }`}
    >
      {props.children}
    </section>
  );
};

Layout.defaultProps = {
  className: "",
};
