import React from "react";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      {superhero}
    </div>
  );
};
