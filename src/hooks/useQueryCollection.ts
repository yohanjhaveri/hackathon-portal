import { useEffect, useState } from "react";
import { FirestoreError } from "firebase/firestore";
import { listenCollection } from "../api/helpers/listen-collection";

type Query<T> = {
  data: T | null;
  loading: boolean;
  error: FirestoreError | null;
};

export const useQueryCollection = <T>(collectionName: string) => {
  const [query, setQuery] = useState<Query<T[]>>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    try {
      setQuery((prev) => ({ ...prev, loading: true }));

      const unsub = listenCollection<T>(collectionName, (value) => {
        setQuery((prev) => ({ ...prev, loading: false, data: value }));
      });

      return () => unsub();
    } catch (error) {
      setQuery((prev) => ({ ...prev, loading: false, error: error as FirestoreError }));
    }
  }, [collectionName]);

  return [query.data, query.loading, query.error] as [T[] | null, boolean, FirestoreError | null];
};
