import { IconButton, Button } from '@radix-ui/themes'
import MovieForm from '../components/MovieForm'
import { ROUTES } from '../constants/routes.js'
import { useNavigate  } from "react-router-dom";
import { ListBulletIcon } from '@radix-ui/react-icons';

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Button onClick={ ()=>{ navigate(ROUTES.LIST) } } color='orange'> All Movies </Button> */}
        <IconButton color='orange'>
           
        </IconButton>
      </div>
      <MovieForm />
    </>
  )
}
