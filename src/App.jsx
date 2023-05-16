import AppStyle from "./styled/App";
import Container from "./container/Container";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <>
      <AppStyle>
        <Container>
          <UserList />
        </Container>
      </AppStyle>
    </>
  );
}

export default App;
