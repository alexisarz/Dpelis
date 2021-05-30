import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/nav';
import MovieList from './components/movieList';
import SeriesList from './components/seriesList';
import FormContainer from './components/formContainer';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
        <Nav/>
        <MovieList/>
        <SeriesList/>
        <FormContainer/>
        <Footer/>
    </div>
  );
}

export default App;
