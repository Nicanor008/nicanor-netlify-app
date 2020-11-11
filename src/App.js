import loadable from "@loadable/component";
import { HashRouter, Route, Switch } from "react-router-dom";

const Homepage = loadable(() => import("./components/Homepage/homepage"));
const NotFound = loadable(() => import("./components/NotFound/notFound"));

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
