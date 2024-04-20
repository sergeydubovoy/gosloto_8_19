import { useState } from "react";
import styled from "styled-components";
import { FieldNames, MaxActiveNumbers, NumbersQuantity } from "./LotteryField";

interface FieldProps {
  fieldName: FieldNames;
  maxActiveNumbers: MaxActiveNumbers;
  numbersQuantity: NumbersQuantity;
}

enum CountText {
  allChecked = "Все числа отмечены",
  letsCheck = "Отметьте",
}

enum CountTextCases {
  nominative = "число",
  nominativePlural = "числа",
  genitive = "чисел",
}

export const Field: React.FC<FieldProps> = ({
  fieldName,
  numbersQuantity,
  maxActiveNumbers,
}) => {
  const numbers = Array.from({ length: numbersQuantity }, (_, i) => i + 1);
  const [activeNumbers, setActiveNumbers] = useState<number[]>([]);

  const handleNumberClick = (number: number) => {
    return () => {
      if (activeNumbers.length < maxActiveNumbers) {
        setActiveNumbers((activeNumbers) => {
          const newActiveNumbers = activeNumbers.includes(number)
            ? activeNumbers.filter((num) => num !== number)
            : [...activeNumbers, number];

          return newActiveNumbers;
        });
      }
    };
  };

  const remainingNumbers = maxActiveNumbers - activeNumbers.length;
  const wordEnding =
    remainingNumbers === 1
      ? CountTextCases.nominative
      : remainingNumbers < 5
      ? CountTextCases.nominativePlural
      : CountTextCases.genitive;

  return (
    <FieldWrapper>
      <DescriptionWrapper>
        <FieldName>{fieldName}</FieldName>
        {remainingNumbers === 0 ? (
          <p>{CountText.allChecked}</p>
        ) : (
          <p>
            {CountText.letsCheck} {remainingNumbers} {wordEnding}
          </p>
        )}
      </DescriptionWrapper>
      <NumbersList>
        {numbers.map((number) => (
          <Number
            key={number}
            active={activeNumbers.includes(number)}
            onClick={handleNumberClick(number)}
          >
            {number}
          </Number>
        ))}
      </NumbersList>
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

const DescriptionWrapper = styled.div`
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
