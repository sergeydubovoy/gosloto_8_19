import styled from "styled-components";
import { Field } from "./Field";
import { Button } from "./Button";

export enum FieldNames {
  fieldOne = "Поле 1",
  fieldTwo = "Поле 2",
}

const TIKET_NUMBER: string = "Билет 1";

export enum MaxActiveNumbers {
  fieldOne = 8,
  fieldTwo = 1,
}

export enum NumbersQuantity {
  fieldOne = 19,
  fieldTwo = 2,
}

export const LotteryField: React.FC = () => {
  return (
    <Wrapper>
      <TiketNumber>{TIKET_NUMBER}</TiketNumber>
      <Field
        fieldName={FieldNames.fieldOne}
        maxActiveNumbers={MaxActiveNumbers.fieldOne}
        numbersQuantity={NumbersQuantity.fieldOne}
      />
      <Field
        fieldName={FieldNames.fieldTwo}
        maxActiveNumbers={MaxActiveNumbers.fieldTwo}
        numbersQuantity={NumbersQuantity.fieldTwo}
      />
      <Button />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
