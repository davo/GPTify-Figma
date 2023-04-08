import * as React from "react";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  name?: string;
  color?: string;
}

const iconsData = {
  "arrow-left":
    "M8.29289 15.7071L0.585786 8L8.29289 0.292894L9.70711 1.70711L4.41421 7L16 7L16 9L4.41421 9L9.70711 14.2929L8.29289 15.7071Z",
  "arrow-right":
    "M7.70711 0.292893L15.4142 8L7.70711 15.7071L6.29289 14.2929L11.5858 9L-7.61199e-07 9L-5.86354e-07 7L11.5858 7L6.29289 1.70711L7.70711 0.292893Z",
  settings:
    "M7 2.33182V0H9V2.33182L11.3009 3.28489L12.9497 1.63604L14.364 3.05025L12.7151 4.6991L13.6682 7H16V9H13.6682L12.7151 11.3009L14.364 12.9497L12.9497 14.364L11.3009 12.7151L9 13.6682V16H7V13.6682L4.6991 12.7151L3.05025 14.364L1.63604 12.9497L3.28489 11.3009L2.33182 9L0 9V7L2.33182 7L3.28489 4.6991L1.63604 3.05025L3.05025 1.63604L4.6991 3.28489L7 2.33182ZM8 4.08239L5.22983 5.22983L4.08239 8L5.22983 10.7702L8 11.9176L10.7702 10.7702L11.9176 8L10.7702 5.22983L8 4.08239ZM8 5.91761L9.47247 6.52753L10.0824 8L9.47247 9.47247L8 10.0824L6.52753 9.47247L5.91761 8L6.52753 6.52753L8 5.91761Z",
  github:
    "M8 0C3.58 0 0 3.67055 0 8.20235C0 11.8319 2.29 14.8975 5.47 15.9843C5.87 16.0561 6.02 15.81 6.02 15.5947C6.02 15.3999 6.01 14.754 6.01 14.067C4 14.4464 3.48 13.5646 3.32 13.1033C3.23 12.8674 2.84 12.1395 2.5 11.9447C2.22 11.7909 1.82 11.4115 2.49 11.4013C3.12 11.391 3.57 11.9959 3.72 12.242C4.44 13.4826 5.59 13.134 6.05 12.9187C6.12 12.3855 6.33 12.0267 6.56 11.8216C4.78 11.6166 2.92 10.9091 2.92 7.77173C2.92 6.87972 3.23 6.14151 3.74 5.56735C3.66 5.36229 3.38 4.52155 3.82 3.39372C3.82 3.39372 4.49 3.17841 6.02 4.23446C6.66 4.04991 7.34 3.95763 8.02 3.95763C8.7 3.95763 9.38 4.04991 10.02 4.23446C11.55 3.16816 12.22 3.39372 12.22 3.39372C12.66 4.52155 12.38 5.36229 12.3 5.56735C12.81 6.14151 13.12 6.86947 13.12 7.77173C13.12 10.9194 11.25 11.6166 9.47 11.8216C9.76 12.078 10.01 12.5701 10.01 13.3391C10.01 14.4361 10 15.3179 10 15.5947C10 15.81 10.15 16.0664 10.55 15.9843C13.71 14.8975 16 11.8216 16 8.20235C16 3.67055 12.42 0 8 0Z",
};

export const Icon: React.FC<Props> = (props) => {
  return (
    <i className={`${styles.wrap} ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 16 16"
        fill={props.color}
      >
        <path d={iconsData[props.name]} />
      </svg>
    </i>
  );
};

Icon.defaultProps = {
  className: "",
  name: "copyLink",
  color: "var(--color-primary)",
} as Partial<Props>;
