import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList2() {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const toDos = useRecoilValue(toDoState);
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  console.log(category);
  return (
    <div>
      {/* <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>ToDo</h2>
      <ul>
        {toDo.map((element) => (
          <ToDo key={element.id} {...element} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((element) => (
          <ToDo key={element.id} {...element} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((element) => (
          <ToDo key={element.id} {...element} />
        ))}
      </ul>
      <hr /> */}
      <h1>To Dos</h1>
      <hr />
      {/* <form> */}
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      {/* </form> */}
      <CreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList2;
