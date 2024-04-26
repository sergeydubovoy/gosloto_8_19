import { FieldStore } from "store/FieldStore";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 500px;
`;

export const handleNumberClick =
  (fieldStore: FieldStore, index: number) => (number: number) => () =>
    fieldStore.toggleSelectedNumbers(index, number);
