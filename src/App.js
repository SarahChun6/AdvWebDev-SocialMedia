import Login from './pages/login/Login';
import Source from './pages/Source';

import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth}  from 'firebase/auth';
import app from './tools/firebase';

const App = ()=>{
  const auth = getAuth()

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {user ? <Source/>:<Login/>}
    </>
  );
}

export default App;
