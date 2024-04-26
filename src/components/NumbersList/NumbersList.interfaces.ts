export interface INumbersList {
    field: {
      numbersQuantity: number;
      selectedNumbers: number[];
    };
    handleNumberClick: (number: number) => () => void;
  }