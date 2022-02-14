import React from 'react';
import Header from './Header';
import css from "styled-jsx/css";

type AppLayoutProps = {
    children: React.ReactNode;
}
const main_contents = css`
    .contents {
        margin-left:1.5%;
        margin-right:1.5%;
    }
`;

function AppLayout({ children }:AppLayoutProps ) {
    const { type } = children;
    return (
        <div>
            <Header link={type.name}/>
            <div className='contents'>
                { children }
            </div>
            <style jsx>{main_contents}</style>
        </div>
    );
}

export default AppLayout;