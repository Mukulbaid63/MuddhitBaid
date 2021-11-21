import React, { useEffect, useState } from 'react';
import ArticleContainer from './ArticleContainer';
import { Spin as Loader } from 'antd';
import { Empty } from 'antd';

const Reads = () => {
    const [articleList, setArticleList] = useState<Array<Object>>([]);
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

     
    // useEffect(() => {
    //     api<{ sheet1: Array<Object> }>(BLOGS_API)
    //     .then(({sheet1}) => {
    //         setArticleList(sheet1);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // }, [])
    return (
        <div>
            {/* {articleList === [] ? <Loader></Loader> : } */}
            <Empty style={{position:'relative', top:'80px', fontSize:'14px'}} description="Hey, my reads will be coming soon!"/>
        </div>
    );
};

export default Reads;