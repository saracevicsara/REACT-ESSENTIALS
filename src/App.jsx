import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
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
              isSelect={selectedTopic == "state"}
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
      </main>
    </div>
  );
}

export default App;
