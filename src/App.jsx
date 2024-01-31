import './App.css'
import UserList from '../features/user/UserList'
import CakeView from '../features/cake/CakeView'
import IceCreamView from '../features/iceCream/IceCreamVew'

function App() {

  return (
    <div>
      <IceCreamView/>
      <CakeView/>
      <UserList/>
    </div>
    )
}

export default App
