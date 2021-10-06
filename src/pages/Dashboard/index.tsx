import React, { useState } from "react";

import { Container } from "../../components/Content/styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>("");
  const [yearSelected, setYearSelected] = useState<string>("");
  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
  ];
  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
        />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
