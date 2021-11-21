import React, { useEffect, useState } from 'react';
import ArticleContainer from './ArticleContainer';
import { Spin, Divider } from 'antd';
// @ts-ignore
import styled from 'styled-components';
import styles from '../styles/ProfileHeader.scss';

export type Article = {
    name: string,
    image: string,
    minutes:number,
    url:string,
    date:string,
    desc: string
}
const Writes = () => {
    const [articleList, setArticleList] = useState<Array<Article> | null >(null);
    const BLOGS_API = 'https://api.sheety.co/35b0125e87faa2f26d97c6efb6bb6a5d/articleData/sheet1'

    function api<T>(url: string): Promise<T> {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json() as Promise<T> ;
        })
      
      }

     
    useEffect(() => {
        api<{ sheet1: Array<Article> }>(BLOGS_API)
        .then(({sheet1}) => {
            setArticleList(sheet1);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
    return (
        <div style={{overflow:'auto', height:'430px'}}>
            {articleList === null ? <Loader style ={{
                position: 'relative',
                top: '100px',
                fontSize: 15,
                color: '#000000'
            }} tip = "Muddhit's writing for you..." size='large'/> : articleList.map( item => 
                item.name && item.minutes && item.url && item.date && 
                
                (
                <>
                <ArticleContainer name={item.name} desc={item.desc} minutes={item.minutes} url={item.url} date={item.date}></ArticleContainer>
                <Divider />
                </>
                )
            )}
            
        </div>
    );
};

const Loader = styled(Spin)`
& > span > .ant-spin-dot-item {
            background-color: #1a1e21 !important;
}

`;

export default Writes;