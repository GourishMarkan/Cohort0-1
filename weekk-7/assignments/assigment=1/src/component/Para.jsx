// import React from "react";
import { useState } from "react";
export default function Para() {
  const [wordLength, setWordLength] = useState(5); // Default word length
  const [generatedParagraph, setGeneratedParagraph] = useState([]);
  const generateParagraph = () => {
    const words = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      "Ut",
      "enim",
      "ad",
      "minim",
      "veniam",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat",
      "Duis",
      "aute",
      "irure",
      "dolor",
      "in",
      "reprehenderit",
      "in",
      "voluptate",
      "velit",
      "esse",
      "cillum",
      "dolore",
      "eu",
      "fugiat",
      "nulla",
      "pariatur",
      "Excepteur",
      "sint",
      "occaecat",
      "cupidatat",
      "non",
      "proident",
      "sunt",
      "in",
      "culpa",
      "qui",
      "officia",
    ];
    const randomWords = [];
    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }
    const paragraph = randomWords.join(" ");

    setGeneratedParagraph(paragraph);
  };
  return (
    <div>
      <label>
        Word Length:
        <input
          type="number"
          value={wordLength}
          onChange={(e) => setWordLength(e.target.value)}
        />
      </label>
      <button onClick={generateParagraph}>Generate Paragraph</button>
      <p>{generatedParagraph}</p>
    </div>
  );
}
