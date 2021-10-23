import Game from './pages/Game';
import {colors} from './utils/colors'

const App = () => {
  return (
   <div style={style}>
      <Game/>
   </div>
  );
}

const style = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.lightBlue,
  fontFamily: 'Montserrat'
}

export default App;
