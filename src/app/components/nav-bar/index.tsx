import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./nav-bar.module.scss";
import Image from "next/image";
import NavMenu from './../nav-menu/index';

const ss = classNames.bind(styles);
export default function NavBar() {
  return (
    <div className={ss("wrapper")}>
      <div className={ss("nav-bar-container")}>
        <div className={ss("logo")}>
          <Link href="/">
            <Image
              src="/images/Logo-Instagram.png"
              width={105}
              height={30}
              alt="logo"
            />
          </Link>
        </div>
        <NavMenu/>
      </div>
      
    </div>
  );
}
