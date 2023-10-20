type Types = 'all' | 'markup' | 'method' | 'operator' | 'function' | 'cycle' | 'request' | 'task' | 'OOP' | 'React' | 'Node.js' | 'typescript'

export interface IContentItem {
    title: {
        en: string,
        ua: string
    };
    body: {
        en: string,
        ua: string
    };
    link: {
        en: string,
        ua: string
    };
    type: Types | Types[]
    data: string | string[]
}

export interface ILanguageFilterProps {
    activePage: number;
    language: string;
    setENLanguage: () => void;
    setUALanguage: () => void
}

export interface IAboutUsProps {
}

export interface IHeaderProps {
    setActivePage: (page: number) => void
}

export interface ITypeCategory {
    en: string;
    ua: string
}

export interface IMainProps {
    content: IContentItem[];
}

export interface IListProps {
    value: string;
    content: IContentItem[];
}

export interface ISearcherProps {
    value: string
    setSearchParams: (prop: any) => void
}

export interface IFilterProps {
    filter: string;
    setSearchParams: (prop: any) => void;
    types: ITypeCategory[]
}

export interface IContentItemProps {
    value: string;
    data: string | string[];
    title: string;
    body: string;
    link: string;
    type: string;
}

export interface IItemProp {
    data: string | string[]
}

export interface ICarouselProps {
    data: string[];
    setShow: (prop: boolean) => void;
    activeIndex: number;
    setActiveIndex: (prop: number) => void;
    setImgData: (prop: string) => void
}

export interface IModalWindow {
    imgData: string;
    title: string;
    isShowed: boolean;
    setShow: (prop: boolean) => void
}