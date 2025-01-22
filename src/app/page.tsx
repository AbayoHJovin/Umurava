"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/landing"); // Ensure the path is correct and uses "/"
  }, [router]);

  return null;
}
