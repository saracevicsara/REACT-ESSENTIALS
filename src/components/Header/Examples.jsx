import React, { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  // let tabContent = "Please press button";
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
    console.log(selectedTopic);
  }
  console.log("app");
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelect={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Componets
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* {!selectedTopic && <p>Please select topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
      {tabContent}
    </section>
  );
}
