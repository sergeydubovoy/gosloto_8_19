import { submitTicket } from "api/submitTicket";
import { Button } from "components/Button";
import { Fields } from "components/Fields/Fields";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ResultText, TIKET_NUMBER } from "shared/constants/constants";
import { FieldStore } from "store/FieldStore";
import { ResultMessage, TiketNumber, Wrapper } from "./Lottery.styles";

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
      <Button onClick={handleMagicClick} isRandomButton />
      <TiketNumber>{TIKET_NUMBER}</TiketNumber>
      <Fields fieldStore={fieldStore} />
      <Button
        onClick={handleResultClick}
        disabled={fieldStore.isButtonDisabled}
      />
      {result !== null && (
        <ResultMessage result={result}>
          {result ? ResultText.win : ResultText.lose}
        </ResultMessage>
      )}
    </Wrapper>
  );
});
