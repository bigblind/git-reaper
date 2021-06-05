import { Header,  Segment, Grid, Divider } from 'semantic-ui-react'

import LoginButton from "./components/LoginButton"

function App() {
  return (
    <>
      <Header>Git Reaper</Header>
      <Segment>
        <Grid columns={2}>
          <Divider vertical />
          <Grid.Row>
            <Grid.Column>
              <p>
                If you're anything like me, your GitHub account is filled with unfinished projects, old school projects, and other code that's just collecting dust.
                <strong>It's time for all of this cruft to go!</strong>
              </p>
            </Grid.Column>
            <Grid.Column>
              <LoginButton />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default App;
