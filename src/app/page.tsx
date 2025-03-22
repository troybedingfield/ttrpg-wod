import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import styles from "./page.module.scss";
import "./page.scss";
import Button from "./components/Button/Button";
import Link from "next/link";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { redirect } from "next/navigation";

export default async function Home() {

  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    // console.log(error);
  }
  if (!error) {

  }

  return (

    <Suspense fallback={<LoadingSpinner />}>
      <div className="container flex flex-col w-full h-full items-center justify-center">
        <h1>Welcome to your Unlife</h1>
        {!data.user ? <Link href="/login" className="">Login</Link> : <Link href="/dashboard" className="">Dashboard</Link>}
      </div>
    </Suspense>


  );
}
