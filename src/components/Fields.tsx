import { observer } from "mobx-react-lite";
import React from "react";
import { CountText, CountTextCases } from "shared/constants/constants";
import { FieldStore } from "store/FieldStore";
import styled from "styled-components";
import { pluralize } from "utils/pluralize";

interface IField {
  fieldStore: FieldStore;
}

export const Fields: React.FC<IField> = observer(({ fieldStore }) => {
  const handleNumberClick = (index: number, number: number) => () =>
    fieldStore.toggleSelectedNumbers(index, number);

  return (
    <FieldsWrapper>
      {fieldStore.stateArr.map((field, index) => (
        <Field key={index}>
          <Description>
            <FieldName>Поле {index + 1}</FieldName>
            {fieldStore.getRemainingNumbers(index) === 0 ? (
              <p>{CountText.allChecked}</p>
            ) : (
              <p>
                {CountText.letsCheck}{" "}
                {pluralize(fieldStore.getRemainingNumbers(index), [
                  CountTextCases.nominative,
                  CountTextCases.nominativePlural,
                  CountTextCases.genitive,
                ])}
              </p>
            )}
          </Description>
          <NumbersList>
            {Array.from({ length: field.numbersQuantity }, (_, i) => i + 1).map(
              (number) => (
                <Number
                  key={number}
                  active={field.selectedNumbers.includes(number)}
                  onClick={handleNumberClick(index, number)}
                >
                  {number}
                </Number>
              )
            )}
          </NumbersList>
        </Field>
      ))}
    </FieldsWrapper>
  );
});

const FieldsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 500px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FieldName = styled.p`
  font-weight: 600;
`;

const NumbersList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
`;

const Number = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${(props) =>
    props.active ? "4px solid #ffffff" : "1px solid #dddddd"};
  border-radius: ${(props) => (props.active ? "16px" : "8px")};
  background: ${(props) =>
    props.active ? "rgba(250, 250, 50, 1)" : "transparent"};
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "rgba(250, 250, 50, 1)" : "rgba(250, 250, 50, 0.3)"};
  }

  &:active {
    background: rgba(250, 250, 50, 1);
    border-radius: 8px;
    border: 4px solid #ffffff;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: ${(props) => (props.active ? "8px" : "4px")};
  }
`;
