import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date()
  const hours=date.getHours()

  let timeOfDay

  if(hours>0&&hours<12)
  {timeOfDay="Morning"}
  else if(hours>=12&&hours<=20)
  {timeOfDay="Afternoon"}
  else {timeOfDay="Night"}

  return(<h1>Good {timeOfDay}!!</h1>)
}

export default App;
