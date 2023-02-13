import React from "react";

export interface cardsTeamProps {
  label: string;
}

const CardsTeam = (props: cardsTeamProps) => {
    return <button>{props.label}</button>;
};
 
export default CardsTeam;