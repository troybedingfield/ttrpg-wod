import Image from "next/image";
import styles from "./page.module.scss";
import Button from "./components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container flex flex-col w-full h-full items-center justify-center">
        <h1>Welcome to your Unlife</h1>
        <Link href="/login" className="">Login</Link>
      </div>
    </>
  );
}
