import React from "react";
import { useParams } from "react-router";

export const HeroesScreen = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Heroes Screen</h1>
    </div>
  );
};
