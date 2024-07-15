import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// type categories = "TO_DO" | "DOING" | "DONE";
const { persistAtom } = recoilPersist({
  key: "persist-atom-key",
  storage: localStorage,
});

export enum Categories {
  TO_DO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
  DELETE = "DELETE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "DOING")
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "DONE")
    //   return toDos.filter((toDo) => toDo.category === "DONE");

    return toDos.filter((toDo) => toDo.category === category);
  },
});
