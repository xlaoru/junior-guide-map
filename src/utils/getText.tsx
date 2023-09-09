export default function getText(text: any) {
    const language = localStorage.getItem("language");
    return text[language || "en"];
}