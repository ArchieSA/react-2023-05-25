import s from "./styles.module.css";

export const Ordering = ({ id, amount, disabled, onOrder }) => (
  <div className={s.container}>
    <button
      name="add"
      value={1}
      title={amount ? "Увеличить" : "Добавить в заказ"}
      {...(disabled && { disabled: true })}
      onClick={() => onOrder(1)}
    >
      +
    </button>
    <div className={s.amount}>{amount || 0}</div>
    <button
      name="sub"
      value={-1}
      title="Уменьшить"
      {...((disabled || !amount) && { disabled: true })}
      onClick={() => onOrder(-1)}
    >
      -
    </button>
    <button
      name="remove"
      className={s.removeButton}
      value={0}
      title="Удалить блюдо"
      {...((disabled || !amount) && { disabled: true })}
      onClick={() => onOrder(0)}
    >
      Удалить
    </button>
  </div>
);
