import React from "react";

import { Grid } from "./styles";

import Content from "../Content";
import Aside from "../Aside";
import MainHeader from "../MainHeader";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
