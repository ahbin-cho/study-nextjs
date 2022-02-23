import axios from '.';
import type { NextApiRequest, NextApiResponse } from 'next'

export interface responseData {
    title: string;
    contents: string;
    imgUrls?: string[];
    tags?:string[];
    createdAt: string;
    [propName: string]: any;
}

export default function getIdeaShares(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const ideas:responseData[] = [
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
        { title: '아이디어 공유', contents:'blablatest', createdAt:'2022-01-01' },
        { title: '사내복지', contents:'맛있는 간식.. 주세요', createdAt:'2022-01-01' },
    ];

    res.status( 200 ).json({ ideas })
}

// export const getIdeaShares = () => axios.get<responseData[]>("api/ideas");