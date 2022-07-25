import { ListProps } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ListProps[];
  selectTask: (selectedTask: ListProps) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          // <Item key={index} task={item.task} time={item.time} />
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
