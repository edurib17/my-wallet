import React, { useMemo } from "react";
import CountUp from "react-countup";

import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import { Container } from "./styles";

interface IWalletBox {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dollar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBox> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case "dollar":
        return dollarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;
      default:
        return undefined;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          end={amount}
          duration={0.75}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default WalletBox;
