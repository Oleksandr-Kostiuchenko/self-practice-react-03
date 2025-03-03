import style from "./SearchBar.module.css";
import { useState, useEffect, useId } from "react";

const SearchBar = () => {
  const searcInputId = useId();

  const [userQuery, setUserQuery] = useState(() => {
    localStorage.getItem("userQueryKey");
  });

  const onInputChange = (event) => {
    const inputEl = event.target;
    const inputValue = inputEl.value;
    localStorage.setItem("userQueryKey", inputValue);

    setUserQuery(inputValue);
  };

  return (
    <>
      <label htmlFor={searcInputId}>Search</label>
      <input
        type="text"
        name="search"
        id={searcInputId}
        onChange={onInputChange}
        value={localStorage.getItem("userQueryKey")}
      />

      <p>
        User Query: <span>{userQuery}</span>
      </p>
    </>
  );
};

export default SearchBar;
