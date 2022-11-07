import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import { useState } from "react";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  /// const [ currentSign, setCurrentSign ] = useState(HoroscopeContext);

  const { currentSign } = useContext(HoroscopeContext);
  const { setCurrentSign } = useContext(HoroscopeContext);
  console.log(currentSign);
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span onClick={(e) => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
