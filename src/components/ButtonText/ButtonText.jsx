import { useDesctop } from "@/contexts/desktop"

export const ButtonText = () => {
    const desctop = useDesctop()

    return (
        <span>
            {desctop === "PC" ? "Мобильная версия" : "Десктопная версия"}
        </span>
    )
}