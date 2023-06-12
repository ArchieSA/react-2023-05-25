import React, { memo } from "react";
import s from "../../styles.module.css";

export const Tabs = memo(({ objects, onChangeActive, activeIndex, viewItemComponent }) => {
  if (!objects?.length) {
    return null;
  }
  const currentItem = objects[Math.min(activeIndex, objects.length - 1)]
  const View = viewItemComponent

  return (
    <div>
      {objects.map(({ name }, index) => (
        <button
          key={name}
          onClick={() => onChangeActive(index)}
          className={activeIndex === index ? s.restaurantActive : s.restaurant}
        >
          {name}
        </button>
      ))}

      {
        // ключ нужен для перемонтирования ресторана при изменении таба, чтобы сбросить стэйт
        // как альтернатива, добавление эффекта на смену id ресторана для сохранения и перезагрузки стэйта
        activeIndex >= 0 && currentItem ? <View key={currentItem.id} {...currentItem} /> : null
      }
    </div>
  );
})

Tabs.displayName = 'Tabs'
