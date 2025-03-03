import { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/form/Form";
import SearchBar from "./components/searchbar/SearchBar";
import LangSwitcher from "./components/langswitcher/LangSwitcher";

function App() {
  // Login form function
  const handleLogin = (userData) => {
    console.log(userData);
  };

  // Language switcher
  const [language, setLanguage] = useState("uk");

  useEffect(() => {
    const languageDisplayer = document.querySelector(".lang-displayer");
    if (language === "uk") {
      languageDisplayer.textContent = "Вибрана мова: українська 💙";
    } else if (language === "en") {
      languageDisplayer.textContent = "Selected language: english ❤️";
    } else if (language === "sp") {
      languageDisplayer.textContent = "Idioma elegida: espanol 💛";
    }
  }, [language]);

  return (
    <>
      {/* <Form onLogin={handleLogin} /> */}
      {/* <SearchBar /> */}
      <LangSwitcher value={language} setLanguage={setLanguage} />
      <p className="lang-displayer"></p>
    </>
  );
}

export default App;
