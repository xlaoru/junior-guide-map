export default function getText(text: object) {
    const getText = (text: any) => {
        const language = localStorage.getItem("language");
        return text[language || "en"];
    }

    return getText(text)
}