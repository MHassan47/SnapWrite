import { useState } from "react";
import TextBox from "./components/TextBox";
import Upload from "./components/Upload";

function App() {
  const [savedText1, setSavedText1] = useState(
    "This is a text box and the first line is programmed to hold exactly 20 words, after the limit is\n \nreached, the next paragraph will begin. The text box is limited to three paragraphs each containing 20, 25, and 10 words respectively. After the word\n\nlimit of 55 total words, user must remove words."
  );
  const [savedText2, setSavedText2] = useState(
    "This is a text box and the first line is programmed to hold exactly 20 words, after the limit is\n \nreached, the next paragraph will begin. The text box is limited to three paragraphs each containing 20, 25, and 10 words respectively. After the word\n\nlimit of 55 total words, user must remove words."
  );

  return (
    <div
      className="App"
      style={{
        display: "flex",

        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Upload />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "3rem",
        }}
      >
        <TextBox
          storageKey="storedText1"
          setSavedText={setSavedText1}
          savedText={savedText1}
        />
        <TextBox
          storageKey="storedText2"
          setSavedText={setSavedText2}
          savedText={savedText2}
        />
      </div>
    </div>
  );
}

export default App;
