import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import WatchSreen from './pages/WatchSreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar></Navbar>
          < >
            <Route exact path='/Anime2' ><Home /></Route>
            <Route exact path='/watch/:slug' ><WatchSreen /></Route>
            <Route exact path='/info/:slug' ><MovieDetail /> </Route>
          </ >
          <Footer></Footer>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
