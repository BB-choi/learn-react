import "./App.css";

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
            props.onChangeMode(e.target.id);
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

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ];
  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("header");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
