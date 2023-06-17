"use client"

import React, { useCallback, useContext, useState } from "react"

const desctopContext = React.createContext("PC")
const setterDesctopContext = React.createContext(() => { })

//  приемлимо ли такое условие для инициализации локалсторейдж?
if (localStorage.getItem('Desctop') === null) {
    localStorage.setItem(`Desctop`, "PC");
};

// вопрос 1: зачем оборачивать дефолтный контекстный хук в свой кастом?
// вызов контекста в компоненте работает также ведь? или это просто бест практик?
export const useDesctop = () => {
    return useContext(desctopContext)
}

export const useDesctopSwitch = () => {
    return useContext(setterDesctopContext)
}

export const DesctopProvider = ({ children }) => {
    // вопрос 2: разные контексты вызывают разное рендер поведение компонентов к которым привязаны.
    // контекст в который передаем значение рендерится потому-что в нем меняется юзСтейт,
    // а контекст с функцией не рендерится потому-что функция заколбечена и по сути это просто константа?
    const [view, setView] = useState(localStorage.getItem("Desctop"))

    const switchDesctop = useCallback(() => {
        setView((current) => {
            const velue =  current === "PC" ? "mobile" : "PC"
            localStorage.setItem(`Desctop`, velue)
            return velue
        })
    }, [])

    return (
        <desctopContext.Provider value={view}>
            <setterDesctopContext.Provider value={switchDesctop}>
                {children}
            </setterDesctopContext.Provider>
        </desctopContext.Provider>
    )
}