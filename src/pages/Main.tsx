import { useSearchParams } from 'react-router-dom';

import { IMainProps, ITypeCategory } from '../utils/models';

import Searcher from '../components/Searcher';
import Filter from '../components/Filter';
import List from '../layouts/List'

const types: ITypeCategory[] = [
    {en: 'all', ua: 'усе'},
    {en: 'markup', ua: 'верстка'},
    {en: 'method', ua: 'методи'},
    {en: 'operator', ua: 'оператори'},
    {en: 'function', ua: 'функції'},
    {en: 'cycle', ua: 'цикли'},
    {en: 'request', ua: 'запити'},
    {en: 'task', ua: 'задачки'},
    {en: 'OOP', ua: 'ООП'},
    {en: 'React', ua: 'Реакт'},
    {en: 'Node.js', ua: 'Node.js'},
    {en: 'typescript', ua: 'typescript'},
]

function Main({content}: IMainProps) {
    const [searchParams, setSearchParams] = useSearchParams({
        type: "all",
        value: "",
    })

    const value = searchParams.get("value") ?? ""
    const type = searchParams.get("type") ?? "all"

    const searchedContent = () => {
        return content.filter(
            content => {
                return content.title.en.toLowerCase().includes((value ?? "").toLowerCase()) 
                    || content.title.ua.toLowerCase().includes((value ?? "").toLowerCase())
                    || content.body.en.toLowerCase().includes((value ?? "").toLowerCase())
                    || content.body.ua.toLowerCase().includes((value ?? "").toLowerCase())
            }
        )
    }

    const filteredContent = () => {
        if (type.includes("all")) return searchedContent();
        return searchedContent().filter(contentItem => {
            if (Array.isArray(contentItem.type)) {
                return contentItem.type.some(contentType => {
                    return contentType.includes(type)
                })
            } else {
                return type.includes(contentItem.type);
            }
        })
    }

    return (
        <div className='Main'>
            <div className='form'>
                <Searcher value={value} setSearchParams={setSearchParams}/>
                <Filter filter={type} setSearchParams={setSearchParams} types={types}/>
            </div>
            <List value={value} content={filteredContent()}/>
        </div>
    );
};

export default Main;