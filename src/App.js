import '../src/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { ageAction, nameAction, updateAction } from './redux/slice/userSlice'
// import { updateNameAsync, userAction } from './redux/actions/actions'

function App() {
  const { name, age, status } = useSelector(state => { return state })
  const dispatch = useDispatch()
  const updateAge = () => {
    dispatch(ageAction(age + 5))
  }
  const updateName = () => {
    dispatch(nameAction("slice name"))
  }
  const updateStatus = () => {
    dispatch(updateAction("full stack"))
  }

  return (
    <div className="App">
      hello {name} your age is {age} and your are a {status}
      <button onClick={() => updateAge()}>update age</button>
      <button onClick={() => updateName()}>Change Name</button>
      <button onClick={() => updateStatus()}>updateStatus()</button>
    </div>
  );
}

export default App;
