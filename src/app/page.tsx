import classNames from "classnames/bind";
import styles from "./page.module.scss";
const ss = classNames.bind(styles);

export default function Home() {
  return (
    <div className={ss('wrapper')}>
      <h1 className="text-gray-400">Instagram</h1>
    </div>
  );
}
