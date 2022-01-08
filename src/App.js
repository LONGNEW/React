import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 현재 함수를 빠져나가게 되면 setter의 영향을 받는 듯.
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
    // setToDos(function (currentArray) {
    //   return [toDo, ...currentArray]
    // })

  };
  
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type={"text"} placeholder="Write your to do..." />
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
