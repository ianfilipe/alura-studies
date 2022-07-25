import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDezena, minuteUnidade] = String(minutes).padStart(2, "0");
  const [secondsDezena, secondsUnidade] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minuteDezena}</span>
      <span className={style.relogioNumero}>{minuteUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDezena}</span>
      <span className={style.relogioNumero}>{secondsUnidade}</span>
    </>
  );
}
