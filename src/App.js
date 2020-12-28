import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date()
  const hours=date.getHours()
  const styles={ fontSize : 50  }
  let timeOfDay

  if(hours>0&&hours<12)
  {timeOfDay="Morning"
styles.color = "#7fffd4"}
  else if(hours>=12&&hours<=20)
  {timeOfDay="Afternoon"
styles.color = "#ff7f50"}
  else {timeOfDay="Night"
styles.color = "daa520"}

  return(<h1 style={styles}>Good {timeOfDay}!!</h1>)
}

export default App;
