import styled from 'styled-components';

export const SearchContainer = styled.div`
    padding-top: 30px;
`;
export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 24px;
    font-size: 14px;
    line-height: 18px;
    border-radius: 50px;
    border: 1px solid #575756;
`;
export const TagContainer = styled.div`
    margin-top: 20px;  
`;
export const Tag = styled.span`
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
    background: '#fafafa0';
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    opacity: 1;
    transition: all .3s;
    cursor: pointer;
`;
export const IdeaContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
`;
export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Idea = styled.div`
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 400;	
    transition: .15s ease;
    overflow: hidden;

    &:hover, :focus {
        outline: none;
        box-shadow: 0 0 0 0.25rem pink;
        border-color: transparent;
    }
`;
export const IdeaImg = styled.div`
    border-radius: 0.25rem 0.25rem 0 0;
    overflow: hidden;
    img  {
        max-width: 100%;
        display: block;
    }
`;
export const IdeaContent = styled.div`
    padding: 1rem;
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    border-radius: 0 0 0.25rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .15s ease;
    background-color: #FFF;

    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1.125rem;
        line-height: 1.25;
    }
`;


