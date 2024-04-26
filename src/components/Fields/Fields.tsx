import { observer } from "mobx-react-lite";
import React from "react";
import { Field } from "../Field/Field";
import { IFields } from "./Fields.interfaces";
import { Wrapper, handleNumberClick } from "./Fields.styles";

export const Fields: React.FC<IFields> = observer(({ fieldStore }) => {
  return (
    <Wrapper>
      {fieldStore.stateArr.map((field, index) => (
        <Field
          key={index}
          fieldStore={fieldStore}
          index={index}
          field={field}
          handleNumberClick={handleNumberClick(fieldStore, index)}
        />
      ))}
    </Wrapper>
  );
});
