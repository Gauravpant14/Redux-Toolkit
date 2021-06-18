import { useSelector, useDispatch } from 'react-redux'
function App() {
  const { name, age } = useSelector(state => { return state })
  const dispatch = useDispatch()
  const updateAge = () => {
    dispatch({
      type: "UPDATE_AGE",
      payload: age + 5
    })
  }
  const updateName = () => {
    dispatch({
      type: "UPDATE_NAME",
      payload: `${name} pant`
    })
  }
  return (
    <div className="App">
      hello {name} your age is {age}
      <button onClick={() => updateAge()}>update age</button>
      <button onClick={() => updateName()}>Change Name</button>
    </div>
  );
}

export default App;
