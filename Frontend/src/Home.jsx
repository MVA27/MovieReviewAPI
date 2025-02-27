import Moviecard from './components/MovieCard'
import MovieForm from './components/MovieForm'

export default function Home() {

  const movieList = [1, 2, 3, 4];

  return (
    <>
      <MovieForm />
      <br/>
      { movieList.map( (item)=> <Moviecard key={item}/> ) }
      
    </>
  )
}