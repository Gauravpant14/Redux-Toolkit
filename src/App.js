import '../src/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { ageAction, getNames, nameAction, updateAction } from './redux/slice/userSlice'
// import { updateNameAsync, userAction } from './redux/actions/actions'

function App() {
  const { name, age, status, allNames } = useSelector(state => {
    return state.userSlice
  })
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
  const fetchName = () => {
    dispatch(getNames())
  }

  return (
    <div className="App">
      <div>
        hello {name} your age is {age} and your are a {status}
      </div>
      <div>
        <button onClick={() => updateAge()}>update age</button>
        <button onClick={() => updateName()}>Change Name</button>
        <button onClick={() => updateStatus()}>updateStatus()</button>

      </div>
      <button onClick={() => fetchName()}>Get Candidates</button>
      <div>
        {allNames?.map(({ name, id }) => <p key={id}>{name}</p>)}
      </div>

    </div>
  );
}

export default App;
