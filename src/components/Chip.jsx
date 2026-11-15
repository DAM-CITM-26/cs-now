import styles from "./Chip.module.css";
function LiveChip({ info }) {
  return <span className={`${styles.chip} ${styles.activo}`}>{info} </span>;
}
export default LiveChip;
