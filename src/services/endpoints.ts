import api from "./api";
import { Quotes } from "../types/quotesType";
import axios from "axios";

export const listOfQuotes = async (): Promise<Quotes | string> => {
  try {
    const quotes = await api.get<Quotes>("/quotes");
    return quotes.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};
