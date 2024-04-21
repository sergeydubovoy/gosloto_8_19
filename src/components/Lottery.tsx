import styled from "styled-components";
import { Field } from "./Field";
import { ResultButton } from "./ResultButton";
import { observer } from "mobx-react-lite";
import {
  FieldNames,
  NumbersQuantity,
  MaxActiveNumbers,
  TIKET_NUMBER,
} from "../shared/constants/constants";
import { FieldStore } from "../store/FieldStore";
import { MagicButton } from "./MagicButton";

const fieldStore1 = new FieldStore(
  FieldNames.fieldOne,
  NumbersQuantity.fieldOne,
  MaxActiveNumbers.fieldOne
);
const fieldStore2 = new FieldStore(
  FieldNames.fieldTwo,
  NumbersQuantity.fieldTwo,
  MaxActiveNumbers.fieldTwo
);

export const Lottery: React.FC = observer(() => {
  let selectedNumbers1: number[] = [];
  let selectedNumbers2: number[] = [];

  const handleNumberClick1 = (number: number) => {
    fieldStore1.handleNumberClick(number);
    selectedNumbers1 = fieldStore1.fieldState.activeNumbers;
  };

  const handleNumberClick2 = (number: number) => {
    fieldStore2.handleNumberClick(number);
    selectedNumbers2 = fieldStore2.fieldState.activeNumbers;
  };

  const handleButtonClick = () => {
    const { randomArray1, randomArray2 } = fieldStore1.createRandomArrays();

    fieldStore1.compareArrays(
      randomArray1,
      randomArray2,
      selectedNumbers1,
      selectedNumbers2
    );
    fieldStore2.compareArrays(
      randomArray1,
      randomArray2,
      selectedNumbers1,
      selectedNumbers2
    );
  };

  const handleMagicClick = () => {
    fieldStore1.selectRandomNumbers();
    fieldStore2.selectRandomNumbers();
  };

  return (
    <Wrapper>
      <MagicButton onClick={handleMagicClick} />
      <TiketNumber>{TIKET_NUMBER}</TiketNumber>
      <Field fieldStore={fieldStore1} handleNumberClick={handleNumberClick1} />
      <Field fieldStore={fieldStore2} handleNumberClick={handleNumberClick2} />
      <ResultButton onClick={handleButtonClick} />
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
