"use client";

import { useSelector } from "react-redux";

function withFeatureToggle(featureToggleName, { Active, InActive }) {
  return function WithFeatureToggle(params) {
    const isActive = useSelector((state) => state.toggles[featureToggleName]);

    return isActive ? <Active {...params} /> : <InActive {...params} />;
  };
}

function OldCard() {
  return <div></div>;
}
function NewCard() {
  return <div></div>;
}

const FilmCardWithFeatureToggle = withFeatureToggle("isNewCardEnabled", {
  Active: NewCard,
  InActive: OldCard,
});

export default function Hoc() {
  return (
    <div>
      <FilmCardWithFeatureToggle />
    </div>
  );
}
