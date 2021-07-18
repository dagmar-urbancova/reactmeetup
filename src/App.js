import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

// https://github.com/academind/react-complete-guide-code/tree/zz-reactjs-summary/code
// call pages based on address, checks if the path starts with the given string
// for localhost:3000/ call AllMeetupsPage
// <Switch> renders only one page, first match, using 'exact' matches the full  path to the string
// for localhost:3000/favorites call FavoritesPage (separately)

function App() {
  // localhost:3000/
  // my-page.com/
  return (
    <Layout>

      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
