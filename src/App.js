import loadable from "@loadable/component";

const Homepage = loadable(() => import("./components/Homepage/homepage"));

function App() {
  return (
    <main>
      <Homepage />
    </main>
  );
}

export default App;
