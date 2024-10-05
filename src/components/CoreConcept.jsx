export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
// import React from "react"

// function Summary({ text }) {
//   return (
//       <React.Fragment>
//       <h1>Summary</h1>
//       <p>{text}</p>
//       </React.Fragment>
//       );
// }

// function App() {
//   return (
//     <div id="app" data-testid="app">
//       <Summary text="Fragments help you avoid unnecessary HTML elements." />
//     </div>
// z
// }

// export default App;
