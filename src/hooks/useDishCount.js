import { useEffect, useRef, useState } from "react";

export function useDishCount(dish) {
    const [count, setCount] = useState(0);

    // в юзРеф хранюс остояие кнопки (обусловлено большей стабильностью чем создавать переменную на каждый вызов хука)
    const disabled = useRef(
        {
            min: false,
            max: false,
        }
    );


    // сбрасываю счетчик блюд при переключении ресторанов (был баг с сохранением количества)
    useEffect(() => {
        setCount(0);
    }, [dish]);


    // проверка состояния
    if (count === 0) { disabled.current.min = true } else { disabled.current.min = false };
    if (count === 5) {disabled.current.max = true} else {disabled.current.max = false};


    // функция принимает значение кнопки и исходя из него производит операцию
    // оборачивать в юзКолбек нет необходимости так как у функции нет внешней зависимости
    const calc = (param) => {
        switch (param) {
            case '-':
                setCount(count - 1);
                break;
            case '+':
                setCount(count + 1);
                break;
            // при необходимости можно добавть операции для разных кнопок
            default:
                console.log('Не передано условие');
                break;
        };
    };

    return [count, calc, disabled.current];
}


