import { makeAutoObservable } from "mobx";
import {
  FieldNames,
  NumbersQuantity,
  MaxActiveNumbers,
  CountTextCases,
} from "../shared/constants/constants";

interface IFieldState {
  activeNumbers: number[];
}

export class FieldStore {
  fieldName: FieldNames;
  numbersQuantity: NumbersQuantity;
  maxActiveNumbers: MaxActiveNumbers;
  fieldState: IFieldState;
  result: boolean;

  constructor(
    fieldName: FieldNames,
    numbersQuantity: NumbersQuantity,
    maxActiveNumbers: MaxActiveNumbers
  ) {
    this.fieldName = fieldName;
    this.numbersQuantity = numbersQuantity;
    this.maxActiveNumbers = maxActiveNumbers;
    this.fieldState = { activeNumbers: [] };
    this.result = false;

    makeAutoObservable(this);
  }

  get remainingNumbers() {
    return this.maxActiveNumbers - this.fieldState.activeNumbers.length;
  }

  // Эта версия короче, но не сработает, например, если 51 число.

  // get pluralize() {
  //   const remainingNumbers = this.remainingNumbers;
  //   return remainingNumbers === 1
  //     ? CountTextCases.nominative
  //     : remainingNumbers < 5
  //     ? CountTextCases.nominativePlural
  //     : CountTextCases.genitive;
  // }

  // Эта версия универсальна, но длиннее
  get pluralize() {
    const remainingNumbers = this.remainingNumbers;
    const lastDigit = remainingNumbers % 10;
    const lastTwoDigits = remainingNumbers % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
      return CountTextCases.genitive;
    }

    if (lastDigit === 1) {
      return CountTextCases.nominative;
    }

    if ([2, 3, 4].includes(lastDigit)) {
      return CountTextCases.nominativePlural;
    }

    return CountTextCases.genitive;
  }

  handleNumberClick = (number: number) => {
    const isNumberSelected = this.fieldState.activeNumbers.includes(number);
    const activeNumbersLength = this.fieldState.activeNumbers.length;
    const maxActiveNumbers = this.maxActiveNumbers;

    if (isNumberSelected) {
      const newActiveNumbers = this.fieldState.activeNumbers.filter(
        (num) => num !== number
      );
      this.fieldState = { activeNumbers: newActiveNumbers };
    }

    if (activeNumbersLength < maxActiveNumbers) {
      const newActiveNumbers = [...this.fieldState.activeNumbers, number];
      this.fieldState = { activeNumbers: newActiveNumbers };
    }
  };

  createRandomArrays = (): {
    randomArray1: number[];
    randomArray2: number[];
  } => {
    const randomArray1 = Array.from(
      { length: MaxActiveNumbers.fieldOne },
      () => Math.floor(Math.random() * NumbersQuantity.fieldOne) + 1
    );
    const randomArray2 = Array.from(
      { length: MaxActiveNumbers.fieldTwo },
      () => Math.floor(Math.random() * NumbersQuantity.fieldTwo) + 1
    );

    return {
      randomArray1,
      randomArray2,
    };
  };

  compareArrays = (
    randomArray1: number[],
    randomArray2: number[],
    selectedNumbers1: number[],
    selectedNumbers2: number[]
  ) => {
    const matchingNumbers1 = selectedNumbers1.filter((num) =>
      randomArray1.includes(num)
    ).length;
    const matchingNumbers2 = selectedNumbers2.filter((num) =>
      randomArray2.includes(num)
    ).length;
    const match =
      matchingNumbers1 >= 4 || (matchingNumbers1 >= 3 && matchingNumbers2 >= 1);

    this.result = match;

    if (match) {
      console.log("Поздравляем, вы выиграли!");
      console.log(randomArray1, randomArray2);
      console.log(selectedNumbers1, selectedNumbers2);
    } else {
      console.log("Увы, попробуйте еще раз.");
    }
    return match;
  };

  selectRandomNumbers = () => {
    const { numbersQuantity, maxActiveNumbers } = this;

    const selectedNumbers1 = Array.from(
      { length: maxActiveNumbers },
      () => Math.floor(Math.random() * numbersQuantity) + 1
    );

    const selectedNumbers2 = Array.from(
      { length: maxActiveNumbers },
      () => Math.floor(Math.random() * numbersQuantity) + 1
    );

    this.fieldState = { activeNumbers: selectedNumbers1 };
    this.fieldState = { activeNumbers: selectedNumbers2 };
    console.log("magic click");
  };
}
