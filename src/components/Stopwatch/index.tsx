import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ListProps } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected: ListProps | undefined;
  completeTask: () => void;
}

export default function Stopwatch({ selected, completeTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      completeTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar!</Button>
    </div>
  );
}
