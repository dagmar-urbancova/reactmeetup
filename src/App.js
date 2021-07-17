import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

// call pages based on address
// for localhost:3000/ call AllMeetupsPage
// for localhost:3000/favorites call AllMeetupsPage and FavoritesPage (nested)

function App() {
  // localhost:3000/
  // my-page.com/
  return (
    <div className="App">
<Route path='/'>
  <AllMeetupsPage></AllMeetupsPage>
</Route>
<Route path='/new-meetup'>
  <NewMeetupsPage/>
</Route>
<Route path='/favorites'>
  <FavoritesPage />
</Route>
    </div>
  );
}

export default App;
