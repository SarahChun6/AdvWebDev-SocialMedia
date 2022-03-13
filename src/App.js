import Login from './pages/login/Login';
import Source from './pages/Source';

import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth}  from 'firebase/auth';
import app from './tools/firebase';

const App = ()=>{
  const auth = getAuth(app)

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {loading ? <center><h1>Loading...</h1></center> : error ? <center><h1>Error! Refresh?</h1></center> : user ? <Source/>:<Login/>}
    </>
  );
}

export default App;
