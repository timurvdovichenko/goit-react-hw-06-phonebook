// import { useLocalStorage } from 'react-use';

// const LocalStorageHandler = ({ key, contacts }) => {
//   const [value, setValue, remove] = useLocalStorage(key, contacts);
// };

// export default LocalStorageHandler;

import { useEffect } from 'react';

function useLocalStorage(key, contacts) {
  const localStorageContacts = JSON.parse(localStorage.getItem(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [key, contacts]);

  if (localStorageContacts === null) {
    return [];
  }
  return localStorageContacts;
}

export default useLocalStorage;
