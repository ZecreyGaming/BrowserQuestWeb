import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { NavBtns, NavWrap } from "./styles";

const pages = [
  { label: "Market", path: "/market" },
  { label: "Collections", path: "/top-NFTs" },
  { label: "Create", path: "/create" },
];

const NavBar = () => {
  return (
    <NavBtns>
      {pages.map((i, index) => (
        <Nav key={index} {...i} />
      ))}
    </NavBtns>
  );
};

export default NavBar;

export const Nav = (props: { label: string; path: string }) => {
  const router = useRouter();
  const ac = useMemo(() => {
    if (props.path === "/") {
      return router.pathname === props.path;
    } else {
      return router.pathname.includes(props.path);
    }
  }, [router, props.path]);

  return (
    <NavWrap className={classNames("nav-button", { ac })}>
      <Link href={props.path}>{props.label}</Link>
    </NavWrap>
  );
};
