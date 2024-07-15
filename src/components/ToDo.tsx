import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log(" I want to", newCategory);
  // };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let {
      currentTarget: { name },
    } = event;
    category = name as Categories;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((oldToDo) => oldToDo.id === id);
      // const newTodo = { text, id, category: name as any };
      // return [
      //   ...oldToDos.slice(0, targetIndex),
      //   newTodo,
      //   ...oldToDos.slice(targetIndex + 1),
      // ];
      return category !== Categories.DELETE
        ? [
            ...oldToDos.slice(0, targetIndex),
            { text, id, category },
            ...oldToDos.slice(targetIndex + 1),
          ]
        : // : [
          //     ...oldToDos.slice(0, targetIndex),
          //     ...oldToDos.slice(targetIndex + 1),
          //   ];
          oldToDos.filter((oldToDo) => oldToDo.id !== id);
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        // <button onClick={() => onClick("DOING")}>Doing</button>
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        // <button onClick={() => onClick("TO_DO")}>To Do</button>
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        // <button onClick={() => onClick("DONE")}>Done</button>
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button name={Categories.DELETE} onClick={onClick}>
        X
      </button>
    </li>
  );
}

export default ToDo;
