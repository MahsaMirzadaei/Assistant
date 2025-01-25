"use client";

import { getDictionary } from "@/app/dictionaries";
import React from "react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = React.createContext<Dictionary | null>(null);

export default function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary<T extends keyof Dictionary>(
  key: T
): Dictionary[T] {
  const dictionary = React.useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error(
      "useDictionary hook must be used within DictionaryProvider"
    );
  }

  const value = dictionary[key];
  if (value === undefined) {
    throw new Error(`Dictionary key "${key}" not found in the dictionary.`);
  }

  return value;
}
