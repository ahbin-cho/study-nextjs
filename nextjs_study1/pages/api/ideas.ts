import axios from '.';
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IdeaDataI {
    title: string;
    contents: string;
    imgUrls?: string[];
    tags?:string[];
    createdAt: string;
    [propName: string]: any;
}

export default function getIdeaShares(
    req: NextApiRequest,
    res: NextApiResponse,
    offset=0
) {


    const ideas:IdeaDataI[] = [
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/adventure.jpg' },
        { title: '사내복지', contents:'너무 졸려너무 졸려너무 졸려너무 졸려너무 졸려', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/adventure.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/adventure.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/adventure.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01', imgUrls: 'https://assets.codepen.io/285131/cosmonaut.jpg' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01', imgUrls:'https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg' },
       
    ];

    res.status( 200 ).json({ ideas })
}

// export const getIdeaShares = () => axios.get<responseData[]>("api/ideas");