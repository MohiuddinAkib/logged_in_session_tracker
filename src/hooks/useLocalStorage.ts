import React from "react";
import * as storage from "../utils/storage";

const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = React.useState<T>(
    () => storage.getItem(key, defaultValue) as T
  );

  const set = (value: T) => {
    setValue(value);
    storage.setItem(key, value);
  };

  const remove = () => {
    storage.removeItem(key);
  };

  return {
    set,
    remove,
    value,
  };
};

export default useLocalStorage;
