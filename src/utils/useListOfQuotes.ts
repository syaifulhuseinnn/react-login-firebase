import { useEffect, useState } from "react";
import { listOfQuotes } from "../services/endpoints";
import { Quotes } from "../types/quotesType";

export function useListOfQuotes() {
  const [quotes, setQuotes] = useState<Quotes>({} as Quotes);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "failed"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getListOfQuotes = async () => {
      setStatus("loading");
      try {
        const quotes = await listOfQuotes();
        setStatus("success");
        setQuotes(quotes);
      } catch (error: any) {
        setStatus("failed");
        setError(error);
      }
    };

    getListOfQuotes();
  }, []);

  return { status, quotes, error };
}
