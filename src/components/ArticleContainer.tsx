import React from 'react';
import { Divider } from 'antd';
import styles from '../styles/ProfileHeader.scss';

export type Props = {
    name: string,
    minutes:number,
    url:string,
    date:string,
    desc: string

}
// @ts-ignore
import styled from 'styled-components';

const ArticleContainer = (props:Props) => {
    return (
        <div style={{display:'flex', padding:'11px 11px 20px 11px'}} className={styles.writesContainer}>
            <div style={{display:'flex', flexDirection:'column', fontFamily:'Noto Sans Display', textAlign:'left', paddingTop:'1px'}}>
                <span style={{fontSize:'14px', fontWeight:500}}>{props.minutes} Mins Read</span>
                <span style={{fontSize:'12px', fontWeight:300}}>{props.date}</span>
            </div>
            <div style={{fontSize:'17px', padding:'0px 10px', width:'500px', fontWeight:600}} className={styles.writeNameContainer}>
            <ArticleName href={props.url} target='_blank'>{props.name}</ArticleName>
            <ArticleDesc className={styles.writeNameContainerDesc}>{props.desc}</ArticleDesc>
            </div>
            <div>
                <u><a href={props.url} target='_blank'>Learn more.</a></u>
            </div>

        </div>
    );
};

const ArticleName = styled.a`
&& {
    color:#000000 !important;
    font-size: 17px !important;
    flex-wrap: wrap;

    :hover{
        font-size: 17.1px !important;
    }
    
}
`;

const ArticleDesc = styled.div`
&& {
    width: 460px;
    font-weight: 400 !important;
    flex-wrap: wrap;
    font-size: 13px;
    padding-top: 3px;
    color:#5c5b5b;
    font-family:'Noto Sans';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export default ArticleContainer;