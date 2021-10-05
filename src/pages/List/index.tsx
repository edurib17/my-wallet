import React from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    {
      value: "Edu",
      label: "Edu",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="05/10/2021"
          amount="R$ 100,00"
        />
         <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="05/10/2021"
          amount="R$ 100,00"
        />
         <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="05/10/2021"
          amount="R$ 100,00"
        />
         <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="05/10/2021"
          amount="R$ 100,00"
        />
      </Content>
    </Container>
  );
};

export default List;
