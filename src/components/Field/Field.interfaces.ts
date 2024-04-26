import { FieldStore } from "store/FieldStore";

export interface IField {
  fieldStore: FieldStore;
  index: number;
  field: {
    numbersQuantity: number;
    selectedNumbers: number[];
  };
  handleNumberClick: (number: number) => () => void;
}
