import React, { useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content, Filters } from "./styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type } = match.params;
  
  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saída";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E55C5E";
  }, [type]);

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
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
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
