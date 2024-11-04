import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { Fragment, useState } from "react";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/Header/CoreConcepts";
import Examples from "./components/Header/Examples";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
