import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const { sign } = useContext(HoroscopeContext);
  const [match, setMatch] = useState(false);
  console.log(sign);
  return (
    <>
      <button onClick={(e) => setMatch(!match)}>Match</button>
      {match === true && <p> {sign.match} </p>}
    </>
  );
};

export default Match;
