import './App.css';

// components
 import UserList from './components/UserList'
 import Profile from './components/Profile'
import UserState from './context/user/UserState'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <UserState>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-7">
              <UserList />
            </div>
            <div className="col-lg-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>

    </>
  );
}

export default App;
