import "./styles.css";

import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center">
      <Field setInput={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
