import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favourite from "./pages/Favourite";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUps />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favourites">
          <Favourite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
