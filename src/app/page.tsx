"use client";

import { AuthPages } from "@/pages/auth/login";
import { HomePages } from "@/pages/home";
import { getAuthLogin } from "@/store/auth/selectors";
import { useSelector } from "react-redux";

export default function Home() {
  const isAuth = useSelector(getAuthLogin);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isAuth ? <AuthPages /> : <HomePages />}
    </main>
  );
}
