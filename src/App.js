import './App.css';
import Row from './MyComponents/Row'
import Banner from './MyComponents/Banner'
import Navbar from './MyComponents/Nav'
import Trailer from './MyComponents/Trailer'
import requests from './requests'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow={false}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow={false}/>
            <Row title="Action" fetchURL={requests.fetchActionMovies} isLargeRow={false}/>
            <Row title="Comedy" fetchURL={requests.fetchComedyMovies} isLargeRow={false}/>
            <Row title="Horror" fetchURL={requests.fetchHorrorMovies} isLargeRow={false}/>
            <Row title="Romance" fetchURL={requests.fetchRomanceMovies} isLargeRow={false}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow={false}/>
          </Route>
          <Route exact path='/trailer'>
            <Trailer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
