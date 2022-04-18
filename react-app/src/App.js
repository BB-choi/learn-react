import "./App.css";
import { useState } from "react";

// 컴포넌트, 사용자 정의 태그
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = props.topics.map((topic) => {
    return (
      <li key={topic.id}>
        <a
          id={topic.id}
          href={"/read/" + topic.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(Number(e.target.id));
          }}
        >
          {topic.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    const [data] = topics.filter((el) => el.id === id);
    content = <Article title={data.title} body={data.body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          setTopics([...topics, { id: nextId, title, body }]);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }

  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
      <a
        href="/create"
        onClick={(e) => {
          e.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
    </div>
  );
}

export default App;
