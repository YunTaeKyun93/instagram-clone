import Link from "next/link";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import classNames from "classnames/bind";
import styles from "./nav-menu.module.scss";

export default function NavMenu() {
    const ss = classNames.bind(styles);

  return (
    <div className={ss('wrapper')}>
      <Link href="/" className={ss('menu')}>
        <AiOutlineHome /><span>홈</span>
      </Link>
      <Link href="/" className={ss('menu')}>
        <RiSearchLine /><span>검색</span>
      </Link>
      <Link href="/" className={ss('menu')}>
        <BsPlusSquare /><span>만들기</span>
      </Link>
    </div>
  );
}
