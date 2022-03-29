/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useEffect, useState } from 'react';
import css from "styled-jsx/css";
import styled from 'styled-components';
import * as _ from 'lodash';
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration';

import { GetServerSideProps } from 'next';
import axios from './api';
import { SearchContainer,SearchInput,TagContainer,Tag,IdeaContainer,Grid,GridColumn,Idea,IdeaImg,IdeaContent } from './ideashare.module';
import IdeashareModal from './Components/IdeashareModal';
import { IdeaDataI } from './api/ideas';

interface IdeaTag {
    key:string;
    value:string;
}

function ideashare({ ideas }) {
    const [ tags, setTags ] = useState([]);
    const [ search, setSearch ] = useState( '' );
    const [ searchTags, setSearchTags ] = useState<IdeaTag[]>([]);

    const [ ideashareDetail, setIdeashareDetail ] = useState<IdeaDataI>({});
    const [ ideashareDetailModalVisible, setIdeashareDetailModalVisible ] = useState( false );

    const onClickSearchTag = useCallback( ( tag:IdeaTag )=>{
        const { key, value }=tag;
        const prevSearchTags = searchTags;
        const isExists = _.find( prevSearchTags,{ key });

        if ( isExists ) _.pull( prevSearchTags,isExists );
        else prevSearchTags.push({ key,value });

        setSearchTags([ ...prevSearchTags ]);
    },[ searchTags ]);

    const onChangeSearchInput = useCallback( ( e:React.ChangeEvent<HTMLInputElement> )=>{
        const { value }=e.target;
        setSearch( value )
    },[]);

    const onCloseModal=useCallback( ()=>{
        setIdeashareDetail({});
        setIdeashareDetailModalVisible( false );
    },[]);

    useEffect( ()=>{
    },[])

    return (
        <div>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search"
                    onChange={( e )=>{onChangeSearchInput( e )}}
                    value={ !_.isEmpty( searchTags ) ? _.join( _.map( searchTags,'value' ),' ' ) : search }
                />
            </SearchContainer>
            <TagContainer>
                <Tag onClick={()=>{onClickSearchTag({ key:'idea', value:'#아이디어' })}}># 아이디어</Tag>
                <Tag onClick={()=>{onClickSearchTag({ key:'welfare', value:'#사내복지' })}}># 사내복지</Tag>
                <Tag onClick={()=>{onClickSearchTag({ key:'good', value:'#추천해요' })}}># 추천해요</Tag>
            </TagContainer>
            
            <IdeaContainer>
                <Grid id="scrollArea">
                    {
                        _.map( ideas, ( idea:IdeaDataI, idx )=>{
                            const { title, contents, createdAt, imgUrls } = idea;
                            return(
                                <GridColumn>
                                    <Idea
                                        onDoubleClick={()=>{
                                            const modal:HTMLDialogElement = document.querySelector( 'dialog' );
                                            setIdeashareDetail( idea );
                                            setIdeashareDetailModalVisible( true );
                                            modal.showModal();
                                        }
                                        }
                                    >
                                        <IdeaImg>
                                            <img src={imgUrls} />
                                        </IdeaImg>
                                        <IdeaContent>
                                            <h2>{title}</h2>
                                            <div>{contents}</div>
                                        </IdeaContent>
                                    </Idea>
                                </GridColumn>
                            )
                        })
                    }
                </Grid>
            </IdeaContainer>
            <IdeashareModal
                visible={ideashareDetailModalVisible}
                onClose={onCloseModal}
                detailInfo={ideashareDetail}
            />
        </div>
    );
}
export default ideashare;

export const getServerSideProps : GetServerSideProps = async ({ params }) =>{
    
    const queryClient = new QueryClient()
    const { data } = await axios.get( '/api/ideas' );
    const { ideas } = data;

    await queryClient.prefetchInfiniteQuery( 'ideas', () => data, { staleTime: 1000 })

    return {
        props: {
            ideas, 
            dehydratedState:JSON.parse( JSON.stringify( dehydrate( queryClient ) ) )
        }, 
    };
}
