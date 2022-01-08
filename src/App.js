import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  
  useEffect(() => {
    console.log("Call the api");
  }, []);
  // keyword의 변화를 감지해서 실행.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("SEARCH : ", keyword);
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type={"text"}
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
