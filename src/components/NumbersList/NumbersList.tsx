import { observer } from "mobx-react-lite";
import React from "react";
import { INumbersList } from "./NumbersList.interfaces";
import { Number, Wrapper } from "./NumbersList.styles";

export const NumbersList: React.FC<INumbersList> = observer(
  ({ field, handleNumberClick }) => {
    return (
      <Wrapper>
        {Array.from({ length: field.numbersQuantity }, (_, i) => i + 1).map(
          (number) => (
            <Number
              key={number}
              active={field.selectedNumbers.includes(number)}
              onClick={handleNumberClick(number)}
            >
              {number}
            </Number>
          )
        )}
      </Wrapper>
    );
  }
);
