import { useSelector, useDispatch } from 'react-redux'
import { updateNameAsync, userAction } from './redux/actions/actions'
function App() {
  const { name, age, status } = useSelector(state => { return state })
  const dispatch = useDispatch()
  const updateAge = () => {
    dispatch({
      type: "UPDATE_AGE",
      payload: age + 5
    })
  }
  const updateName = () => {
    dispatch(updateNameAsync())
  }
  const updateStatus = () => {
    dispatch(userAction("full stack Developer"))
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
