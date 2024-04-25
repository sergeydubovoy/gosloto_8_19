import { submitTicket } from "api/submitTicket";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ResultText, TIKET_NUMBER } from "shared/constants/constants";
import { FieldStore } from "store/FieldStore";
import styled from "styled-components";
import { Fields } from "./Fields";
import { RandomButton } from "./RandomButton";
import { ResultButton } from "./ResultButton";

const fieldStore = new FieldStore();

export const Lottery: React.FC = observer(() => {
  const [result, setResult] = useState<null | boolean>(null);

  const handleMagicClick = () => fieldStore.selectRandomNumbers();
  const handleResultClick = async () => {
    fieldStore.createRandomArrays();
    const lotteryResult = submitTicket(fieldStore.createTicketData());

    if ((await lotteryResult).isTicketWon) setResult(true);
    else setResult(false);
  };

  return (
    <Wrapper>
      <RandomButton onClick={handleMagicClick} />
      <TiketNumber>{TIKET_NUMBER}</TiketNumber>
      <Fields fieldStore={fieldStore} />
      <ResultButton
        onClick={handleResultClick}
        disabled={fieldStore.isButtonDisabled}
      />
      {result !== null && result ? (
        <ResultMessage result={result}>{ResultText.win}</ResultMessage>
      ) : result !== null && !result ? (
        <ResultMessage result={result}>{ResultText.lose}</ResultMessage>
      ) : null}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 40px 20px;
  max-width: 600px;
  height: auto;
  background: #fff;
  border-radius: 14px;
`;

const TiketNumber = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const ResultMessage = styled.p<{ result: boolean }>`
  color: ${(props) => (props.result === true ? "green" : "red")};
`;
