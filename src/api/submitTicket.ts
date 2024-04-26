import axios from "axios";

interface SubmitDataResponse {
  selectedNumbers: {
    firstField: number[];
    secondField: number[];
  };
  isTicketWon: boolean;
}

/** Интервал повторной отправки запроса к API  */
const PROMISE_TIMEOUT: number = 2000;
/** Максимальное количество попыток запроса к API */
const RETRIES_API_REQUEST_COUNT: number = 2;

const ERROR_API_REQUESTS: string =
  "Не удалось отправить данные после нескольких попыток";
const ERROR_STATUS: string = "Ошибка при отправке запроса: неверный код ответа";

const API_URL: string = "https://jsonplaceholder.typicode.com/posts";
const CONTENT_TYPE_HEADER: string = "Content-type";
const CONTENT_TYPE_VALUE: string = "application/json; charset=UTF-8";

const postTicket = async (data: {
  selectedNumbers: {
    firstField: number[];
    secondField: number[];
  };
  isTicketWon: boolean;
}) => {
  const response = await axios.post<SubmitDataResponse>(API_URL, data, {
    headers: {
      [CONTENT_TYPE_HEADER]: `${CONTENT_TYPE_VALUE}`,
    },
  });

  if (response.status !== 201) {
    throw new Error(`${ERROR_STATUS} ${response.status}`);
  }

  return response.data;
};

export const submitTicket = async (data: {
  selectedNumbers: {
    firstField: number[];
    secondField: number[];
  };
  isTicketWon: boolean;
}): Promise<SubmitDataResponse> => {
  let retries: number = 0;

  while (retries < RETRIES_API_REQUEST_COUNT) {
    try {
      const ticket = await postTicket(data);
      return ticket;
    } catch (error) {
      retries++;
      await new Promise((resolve) => setTimeout(resolve, PROMISE_TIMEOUT));
    }
  }

  throw new Error(ERROR_API_REQUESTS);
};
