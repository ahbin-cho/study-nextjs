import { AppProps } from 'next/app';
import Link from 'next/link';
import React, { useCallback, useContext, useState } from 'react';
import css from "styled-jsx/css";

const headerStyle = css`
    header {
        margin: 1%;
    }
    .logo {
        display: flex;
        font-weight: bold;
        font-size: 8rem;
        font-family: 'Noto Sans KR';
    }
    .nav {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .menu   {
        display: flex;
        position: relative;
        width: 30rem;
    }
    a {
        width: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        text-decoration: none;
        height: 3rem;
        
    }
    
`;

function Header( props: { link: string }) {
    const { link } = props;
   
    return (
        <>
            <header>
                <div className='logo'>
                    <Link href='/'>
                        <a>PUMP</a>
                    </Link>
                </div>
           
                <div className='nav'>
                    <div className='menu'>
                        <Link href='/news'>
                            <a className="news">회사소식공유</a>
                        </Link>
                        <Link href='/ideashare'>
                            <a className="ideashare">아이디어공유</a>
                        </Link>
                        <Link href='/newsletter'>
                            <a className="newsletter">뉴스레터</a>
                        </Link>
                        <Link href='/community'>
                            <a className="community">동아리소식통</a>
                        </Link>
                    </div>
                </div>
            </header>
            <style jsx>{headerStyle}</style>
            <style jsx>
                {
                    `
                        a.${ link } {
                            font-weight: bold;
                            border-bottom: 2px solid;
                        }
                    `
                }
            </style>
        </>
    );
}

export default Header;