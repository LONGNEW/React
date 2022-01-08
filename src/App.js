import { useEffect, useState } from "react";

function Hello() {
  
  function destroyedFn() {
    console.log("destroyed");
  }
  // 처음 생성될 때를 체크 하기 때문에 이 컴포넌트가 삭제되는 것도 감지를 함.
  function effectFn() {
    console.log("created");

    // 삭제 될 때 동작하도록 하려면 return 문을 사용함.
    return destroyedFn;
  }
  
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
