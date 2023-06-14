import { useEffect, useRef, useState } from "react";

export function useDishCount(setter, index) {
    const [count, setCount] = useState(setter?.count)
    // console.log(`setter`, setter);

    const arr = useRef(new Set());
    // const value = useRef();

    useEffect(() => {
        setCount(0)
    }, [index])

    // if (name === setter.name) {
    //     console.log(`tru`);
    // }

    const calc = (param) => {

        switch (param) {
            case '-':
                setCount(count - 1);
                break;
            case '+':
                setCount(count + 1);
                break;
        };
    }

    setter.count = count;
    // arr.current.push(setter)
    arr.current.add(setter)

    // value.current = setter;
    // console.log(`downHoohObj`, value.current);
    console.log(`arr`, arr.current);

    // const clear = () => {
    //     if (value.current) {
    //         console.log(`clear`);
    //         value.current = null
    //     }

    // }
    // useEffect(() => {
    //     return clear;
    // }, [])
    // let count = 0;

    // const calculate = (param) => {
    //     console.log(` count.current`, value.current);
    //         value.current = param + 1;
    //         count.current = () => setter(value.current);
    //         count.current();

    //     //     // return count.current;
    // };


    return [arr.current, calc];
}


