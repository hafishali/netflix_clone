import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import request from './request';

function App() {
  return (
    <div>
      {/* <h1 style={{color:"red"}}>NETFLIX</h1> */}
      <Nav/>
      <Banner fecthUrl={request.fetchNetflixOriginals} />
      <Row isposter={true} title="NetflixOriginals" fecthUrl={request.fetchNetflixOriginals} />
      <Row title="Trending" fecthUrl={request.fetchTrending} />
      <Row title="Top Rated" fecthUrl={request.fetchTopRated} />
      <Row title="Action " fecthUrl={request.fetchActionMovies} />
      <Row title="Horror" fecthUrl={request.fetchHorrorMovies} />
      <Row title="Comedy" fecthUrl={request.fetchComedyMovies} />
      <Row title="Romance" fecthUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fecthUrl={request.fetchDocumentaries} />


    </div>
  )
}

export default App;
