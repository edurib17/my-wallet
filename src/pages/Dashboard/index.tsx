import React from "react";

import { Container } from "../../components/Content/styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Edu",
      label: "Edu",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff" >
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
