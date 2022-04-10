import { useEffect, useReducer } from "react";
import { listOfQuotes } from "../services/endpoints";
import { Quotes } from "../types/quotesType";
import { User } from "firebase/auth";

interface ListOfQuotesState {
  status: string;
  quotes: Quotes;
  error: any;
}

type ACTIONTYPE =
  | { type: "success"; payload: Quotes }
  | { type: "loading" }
  | { type: "failed"; payload: any };

const initialState: ListOfQuotesState = {
  status: "idle",
  quotes: {} as Quotes,
  error: null,
};

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "loading":
      return { status: "loading", quotes: state.quotes, error: state.error };
    case "success":
      return { status: "success", quotes: action.payload, error: state.error };
    case "failed":
      return { status: "failed", quotes: state.quotes, error: action.payload };
    default:
      return state;
  }
}

export function useListOfQuotes(user: User) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(Object.keys(user).length > 0);

  const getListOfQuotes = async () => {
    dispatch({ type: "loading" });

    try {
      const quotes = await listOfQuotes();
      dispatch({ type: "success", payload: quotes as Quotes });
    } catch (error) {
      dispatch({ type: "failed", payload: error });
    }
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getListOfQuotes();
    }
  }, [user]);

  return state;
}
