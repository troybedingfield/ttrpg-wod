import Image from "next/image";
import styles from "./page.module.scss";
import Button from "./components/Button/Button";
import Link from "next/link";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container flex flex-col w-full h-full items-center justify-center">
        <h1>Welcome to your Unlife</h1>
        <Link href="/login" className="">Login</Link>
      </div>
    </Suspense>
  );
}
