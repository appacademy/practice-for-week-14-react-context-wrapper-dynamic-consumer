import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopesObj from "../data/horoscopes";

const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);
  console.log("NavBar rendering");

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
