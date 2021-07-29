import './App.css';
import NavDrawer from './components/Navbar';
import Heading from './components/Heading';
import { Grid, Hidden } from '@material-ui/core';
import Note from './components/Note';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div style={{overflowX: 'hidden'}} className="App">
      <NavDrawer />
      {/* mobile */}
      <div >
        <Hidden smUp implementation="css">  
        <Heading />
        <CardContainer/>
        <div style={{padding: '20px 0px'}}>
          <Note />
        </div>
        </Hidden>
      </div>
      {/* Desktop */}
      <Hidden xsDown implementation="css">
      <div style={{marginLeft: 240}}>
        <Grid container direction="row" justifyContent="space-between">
        <Heading />
        <div style={{padding: '70px 50px 50px'}}>
          <Note />
        </div>
        </Grid>
        <CardContainer />
      </div>
      </Hidden>
      
    </div>
  );
}

export default App;
