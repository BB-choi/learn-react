import "./App.css";
import { useState, useEffect } from "react";

const Slider = () => {
  const [page, setPage] = useState(100);

  useEffect(() => {
    const wrap = document.querySelector(".wrap");
    wrap.style.transition = `transform 1s`;
    wrap.style.transform = `translateX(-${page * 100}px)`;
  }, [page]);

  return (
    <>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        왼쪽
      </button>
      <div className="wrap">
        <div className="div1 slider"></div>
        <div className="div2 slider"></div>
        <div className="div3 slider"></div>
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        오른쪽
      </button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slider></Slider>
      </header>
    </div>
  );
}

export default App;
