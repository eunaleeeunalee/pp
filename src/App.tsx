import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Home from "./Routes/Home";
// import About from "./Routes/About";


function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <Router>
      <Helmet>
        <title>REACTFLIX</title>
      </Helmet>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route exact path={["/"]}>
          <Home />
        </Route>
      </Switch>

      

      
    </Router>
    </QueryClientProvider>
  );
}

export default App;