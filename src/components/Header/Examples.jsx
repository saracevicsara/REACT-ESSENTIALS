import React, { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../Tabs";

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelect={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

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
    </Section>
  );
}
