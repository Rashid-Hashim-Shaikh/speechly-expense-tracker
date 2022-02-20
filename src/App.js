import React, { useRef } from 'react'
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  // const { speechState } = useSpeechContext();
  const main = useRef(null);

// const executeScroll = () => main.current.scrollIntoView();

//   useEffect(() => {
//     if (speechState === SpeechState.Recording) {
//       executeScroll();
//     }
// }, [speechState]);

return (

  <div>
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems='center'
      justifyContent='center'
      style={{ height: '100vh' }}>
      {/* for extra small device (xs) is 12 i.e it will cover full space and
        for small and medium devices (sm) is 4 i.e 3 items will be displayed */}
      <Grid item xs={12} md={4} className={classes.mobile}>
        <Details title='Income' />
      </Grid>
      <Grid ref={main} item xs={12} md={3} className={classes.main}>
        <Main />
      </Grid>
      {/* following grid wont show up on deskstop devices */}
      <Grid item xs={12} md={4} className={classes.desktop}>
        <Details title='Income' />
      </Grid>
      <Grid item xs={12} md={4} className={classes.last}>
        <Details title='Expense' />
      </Grid>
    </Grid>
    <PushToTalkButtonContainer>
      <PushToTalkButton />
      <ErrorPanel />
    </PushToTalkButtonContainer>
  </div>
)
};

export default App;

