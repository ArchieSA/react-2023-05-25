"use client";

import React  from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/Button";

export const BackButton = ({ title, className }) => {
  const actualTitle = title === undefined ? 'Back' : title
  const router = useRouter()

  return <Button className={className} onClick={() => router.back()} viewVariant='inlineDark' >&lt;&lt;{actualTitle && <>&nbsp;</>}{actualTitle}</Button>
}