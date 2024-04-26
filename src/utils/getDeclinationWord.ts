enum Cases {
  zero = 0,
  one = 1,
  two = 2,
  five = 5,
}

enum DigitsBound {
  lastTwoDigitsLowerBound = 4,
  lastTwoDigitsUpperBound = 20,
  lastDigitUpperBound = 5,
  lastTwoDigitsModulo = 100,
  lastDigitModulo = 10,
}

export const getDeclinationWord = (
  number: number,
  titles: string[]
): string => {
  const cases: Cases[] = [
    Cases.two,
    Cases.zero,
    Cases.one,
    Cases.one,
    Cases.one,
    Cases.two,
  ];
  const lastTwoDigits = number % DigitsBound.lastTwoDigitsModulo;
  const lastDigit = number % DigitsBound.lastDigitModulo;

  const index =
    lastTwoDigits > DigitsBound.lastTwoDigitsLowerBound &&
    lastTwoDigits < DigitsBound.lastTwoDigitsUpperBound
      ? Cases.two
      : cases[
          lastDigit < DigitsBound.lastDigitUpperBound ? lastDigit : Cases.five
        ];

  return number + " " + titles[index];
};
