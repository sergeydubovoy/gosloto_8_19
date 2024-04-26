import { observer } from "mobx-react-lite";
import React from "react";
import {
  CountText,
  CountTextCases,
  FIELD_NAME,
} from "shared/constants/constants";
import { getDeclinationWord } from "utils/getDeclinationWord";
import { IDescription } from "./Description.interfaces";
import { FieldName, Wrapper } from "./Description.styles";

export const Description: React.FC<IDescription> = observer(
  ({ fieldStore, index }) => {
    return (
      <Wrapper>
        <FieldName>
          {FIELD_NAME} {index + 1}
        </FieldName>
        {fieldStore.getRemainingNumbers(index) === 0 ? (
          <p>{CountText.allChecked}</p>
        ) : (
          <p>
            {CountText.letsCheck}{" "}
            {getDeclinationWord(fieldStore.getRemainingNumbers(index), [
              CountTextCases.nominative,
              CountTextCases.nominativePlural,
              CountTextCases.genitive,
            ])}
          </p>
        )}
      </Wrapper>
    );
  }
);
