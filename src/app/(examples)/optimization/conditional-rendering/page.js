"use client";

import {
  SlowComponentWithHook,
  useIsAuthorized,
} from "@/app/(examples)/components/SlowComponentWithHook/component";

export default function ConditionalRendering() {
  const isAuthorized = useIsAuthorized();

  if (!isAuthorized) {
    return null;
  }

  return <SlowComponentWithHook />;
}
