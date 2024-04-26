import { Description } from "components/Description/Description";
import { NumbersList } from "components/NumbersList/NumbersList";
import { observer } from "mobx-react-lite";
import React from "react";
import { IField } from "./Field.interfaces";
import { Wrapper } from "./Field.styles";

export const Field: React.FC<IField> = observer(
  ({ fieldStore, index, field, handleNumberClick }) => {
    return (
      <Wrapper>
        <Description fieldStore={fieldStore} index={index} />
        <NumbersList field={field} handleNumberClick={handleNumberClick} />
      </Wrapper>
    );
  }
);
