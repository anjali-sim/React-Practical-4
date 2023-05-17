import AppStyle from "@src/styled/App";
import Container from "@src/container/Container";
import UserList from "@src/components/UserList/UserList";

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
