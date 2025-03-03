import style from "./LangSwitcher.module.css";
import { useState, useEffect, useId } from "react";

const LangSwitcher = ({ language, setLanguage }) => {
  const selectId = useId();
  //   const onSelectChange = () => {};

  return (
    <div>
      <label htmlFor={selectId}>Select Language:</label>
      <select
        name="LangSelect"
        id={selectId}
        onChange={(event) => setLanguage(event.target.value)}
        value={language}
      >
        <option value="uk">Ukranian</option>
        <option value="en">English</option>
        <option value="sp">Spanish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
