import { Flex } from "antd";
import type { ReactNode } from "react";
import styles from "./Header.module.sass";
import clsx from "clsx";

interface HeaderProps {
  className: string;
  children: ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <Flex className={clsx(className, styles.header)}>{children}</Flex>;
};

export default Header;
