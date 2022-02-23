/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useState } from 'react';
import css from "styled-jsx/css";
import * as _ from 'lodash';

import { AppProps } from 'next/app';
import { GetServerSideProps } from 'next';
import getIdeaShares, { responseData } from './api/ideas.api';
import axios from './api';

const style_ideashare = css`
    .search_container {
        padding-top: 30px;
    }

    .search_input {
        width: 100%;
        padding: 12px 24px;
        font-size: 14px;
        line-height: 18px;
        border-radius: 50px;
        border: 1px solid #575756;
    }
    .tag_container {
        margin-top: 20px;
    }

    .tag {
        box-sizing: border-box;
        margin: 0 10px 0 0;
        color: #000000d9;
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: "tnum";
        display: inline-block;
        height: auto;
        padding: 0 7px;
        font-size: 12px;
        line-height: 20px;
        white-space: nowrap;
        background: #fafafa0;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        opacity: 1;
        transition: all .3s;
        cursor: pointer;
    }
    .idea-container {
        margin-top: 15px;
        -webkit-box-align: start;
        align-items: flex-start;
        justify-content: center;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
    }
    .idea-item {
        /* width: 15rem; */
        background: bisque;
        margin: 5px;
        padding: 10px;
    }
`;

function ideashare({ ideas }) {
    const [ tags, setTags ] = useState([]);
    const onClickSearchTag = useCallback( ( tag:string )=>{
    },[]);

    return (
        <div>
            <div className="search_container">
                <input className="search_input" type="text" placeholder="Search">
                </input>
            </div>
            <div className='tag_container'>
                <span className='tag' onClick={()=>{onClickSearchTag( 'idea' )}}># 아이디어</span>
                <span className='tag' onClick={()=>{onClickSearchTag( 'welfare' )}}># 사내복지</span>
                <span className='tag' onClick={()=>{onClickSearchTag( 'good' )}}># 추천해요</span>
            </div>
            <div className='idea-container'>
                {
                    _.map( ideas, idea=>{
                        return(
                            <div className='idea-item'>
                                <div>{idea.title}</div>
                                <div>{idea.contents}</div>
                                <div>{idea.createdAt}</div>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>{style_ideashare}</style>
        </div>
    );
}
export default ideashare;

export const getServerSideProps : GetServerSideProps = async ({ params }) =>{
    const { data } = await axios.get( '/api/ideas' );
    const { ideas } = data;
    return { props: { ideas, }, };
}

