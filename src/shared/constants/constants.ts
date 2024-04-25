/** Максимальное количество чисел, которые можно выбрать в полях */
export enum MaxActiveNumbers {
  fieldOne = 8,
  fieldTwo = 1,
}

/** Количество чисел в полях  */
export enum NumbersQuantity {
  fieldOne = 19,
  fieldTwo = 2,
}

/** Склонения слова число */
export enum CountTextCases {
  nominative = "число",
  nominativePlural = "числа",
  genitive = "чисел",
}

/** Слова в счетчике отмеченных номеров */
export enum CountText {
  allChecked = "Все числа отмечены",
  letsCheck = "Отметьте",
}

/** Текст результата после сравнения массивов и прихода ответа от сервера */
export enum ResultText {
  win = "Ура! Вы выиграли!",
  lose = "Увы. Попробуйте позже.",
}

export const TIKET_NUMBER: string = "Билет 1";
export const SHOW_RESULT_TEXT = "Показать результат";
export const FIELD_NAME: string = "Поле";
