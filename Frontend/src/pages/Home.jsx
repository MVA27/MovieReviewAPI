import { IconButton } from '@radix-ui/themes'
import MovieForm from '../components/MovieForm'
import { ROUTES } from '../constants/routes.js'
import { useNavigate  } from "react-router-dom";
import { ListBulletIcon } from '@radix-ui/react-icons';

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className='all-movies-list'>
        <IconButton onClick={ ()=>{ navigate(ROUTES.LIST) } } color='orange'>
          <ListBulletIcon/>
        </IconButton>
      </div>

      <MovieForm />

    </>
  )
}
