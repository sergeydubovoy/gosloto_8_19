import { makeAutoObservable } from "mobx";
import { MaxActiveNumbers, NumbersQuantity } from "shared/constants/constants";

export class FieldStore {
  stateArr: {
    numbersQuantity: number;
    maxActiveNumbers: number;
    selectedNumbers: number[];
    randomArray: number[];
  }[];

  constructor() {
    this.stateArr = [
      {
        numbersQuantity: NumbersQuantity.fieldOne,
        maxActiveNumbers: MaxActiveNumbers.fieldOne,
        selectedNumbers: [],
        randomArray: [],
      },
      {
        numbersQuantity: NumbersQuantity.fieldTwo,
        maxActiveNumbers: MaxActiveNumbers.fieldTwo,
        selectedNumbers: [],
        randomArray: [],
      },
    ];

    makeAutoObservable(this);
  }

  getRemainingNumbers = (index: number) => {
    return (
      this.stateArr[index].maxActiveNumbers -
      this.stateArr[index].selectedNumbers.length
    );
  };

  toggleSelectedNumbers = (index: number, number: number) => {
    const selectedNumbers = this.stateArr[index].selectedNumbers;

    const indexInSelectedNumbers = selectedNumbers.indexOf(number);

    if (indexInSelectedNumbers !== -1) {
      selectedNumbers.splice(indexInSelectedNumbers, 1);
    } else if (selectedNumbers.length < this.stateArr[index].maxActiveNumbers) {
      selectedNumbers.push(number);
    }
  };

  createRandomArrays = () => {
    this.stateArr.forEach((_, index) => {
      const randomArray = Array.from(
        { length: this.stateArr[index].maxActiveNumbers },
        () =>
          Math.floor(Math.random() * this.stateArr[index].numbersQuantity) + 1
      );
      this.stateArr[index].randomArray = randomArray;
      console.log(randomArray);
    });
  };

  compareArrays = () => {
    const firstField = this.stateArr[0];
    const firstFieldSelectedNumbers = firstField.selectedNumbers;
    const firstFieldRandomArray = firstField.randomArray;

    const secondField = this.stateArr[1];
    const secondFieldSelectedNumbers = secondField.selectedNumbers;
    const secondFieldRandomArray = secondField.randomArray;

    const sameNumbersInFirstField = firstFieldSelectedNumbers.filter((number) =>
      firstFieldRandomArray.includes(number)
    ).length;

    const sameNumbersInBothFields =
      firstFieldSelectedNumbers.filter((number) =>
        firstFieldRandomArray.includes(number)
      ).length +
      secondFieldSelectedNumbers.filter((number) =>
        secondFieldRandomArray.includes(number)
      ).length;

    if (sameNumbersInFirstField >= 4 || sameNumbersInBothFields >= 4) {
      console.log("Успех");
      return true;
    } else {
      console.log("Попробуйте еще раз");
      return false;
    }
  };

  createTicketData = () => {
    const ticketData = {
      selectedNumbers: {
        firstField: this.stateArr[0].selectedNumbers,
        secondField: this.stateArr[1].selectedNumbers,
      },
      isTicketWon: this.compareArrays(),
    };
    return ticketData;
  };

  selectRandomNumbers = () => {
    this.stateArr.forEach((field, index) => {
      const randomSelectedNumbers: number[] = [];
      while (randomSelectedNumbers.length < field.maxActiveNumbers) {
        const randomNum = Math.floor(Math.random() * field.numbersQuantity) + 1;
        if (!randomSelectedNumbers.includes(randomNum)) {
          randomSelectedNumbers.push(randomNum);
        }
      }
      this.stateArr[index].selectedNumbers = randomSelectedNumbers;
    });
  };

  get isButtonDisabled(): boolean {
    return this.stateArr.some(
      (field) => field.selectedNumbers.length !== field.maxActiveNumbers
    );
  }
}
