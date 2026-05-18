import { useState } from "react";
import Contador from "../Contador/Contador";

const ContadorContainer = () => {
  const [contador, setContador] = useState(1);

  const aumentar = () => {
    if (contador < 10) {
      setContador((prevState) => prevState + 1);
      console.log(contador+1);
    }
  };

  return (
    <Contador contador={contador} aumentar={aumentar} />
  );
};

export default ContadorContainer;


