import api from "./api";

export const listOfQuotes = async () => {
  try {
    const quotes = await api.get("/quotes");
    return quotes.data;
  } catch (error) {
    throw Error("Failed to get quotes!");
  }
};
