import loadable from "@loadable/component";

import "./App.css";

const Homepage = loadable(() => import("./components/Homepage/homepage"));

function App() {
  return (
    <main>
      <a className="skip-link" href="#maincontent">
        Skip to main
      </a>
      <Homepage />
    </main>
  );
}

export default App;
