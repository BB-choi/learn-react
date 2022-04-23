import "./App.css";
import Wrapper from "./Wrapper";
import Hello from "./Hello";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputUseRef from "./InputUseRef";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <InputUseRef />
      <InputSample />
      <Wrapper>
        <Hello color="black" name="이름" />
        <Hello color="red" />
      </Wrapper>
      <Counter />
    </div>
  );
}

export default App;
