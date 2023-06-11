import React, { useEffect, useState } from "react";

export const Search = ({ restaurants, findRestaurants }) => {
    const [timer, setTimer] = useState();
    const [valueInput, setValueInput] = useState(null);

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        };

        setTimer(setTimeout(request, 2000));
    }, [valueInput]);

    const request = () => {
        // тернарник для вывода кнопок когда поиск пуст 
        valueInput === null ?
            findRestaurants(restaurants) :
            findRestaurants([...restaurants.filter((restaraun) => {
                if (restaraun.name.toLowerCase().includes(valueInput)) {
                    return restaraun;
                };
            })]);
    };

    return (
        <div>
            <span>Search: </span>
            <input type="text"
                value={valueInput}
                onChange={(event) => setValueInput(event.target.value)}
            />
        </div>
    );
};
