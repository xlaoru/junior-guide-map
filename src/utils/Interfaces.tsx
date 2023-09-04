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
    type: 'all' | 'markup' | 'method' | 'operator' | 'function' | 'cycle' | 'request' | 'task' | 'OOP' | 'React' | 'Node.js' | 'typescript';
    data: string | string[]
}

export interface IAboutUsProps {
    activeLanguage: number
}

export interface IHeaderProps {
    setActivePage: (page: number) => void;
    activeLanguage: number
}

export interface IFooterProps {
    activeLanguage: number
}

export interface ITypeCategory {
    en: string;
    ua: string
}

export interface IMainProps {
    content: IContentItem[];
    activeLanguage: number
}

export interface IContentItemProps {
    data: string | string[];
    title: string;
    body: string;
    link: string;
    type: string;
    activeLanguage: number
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