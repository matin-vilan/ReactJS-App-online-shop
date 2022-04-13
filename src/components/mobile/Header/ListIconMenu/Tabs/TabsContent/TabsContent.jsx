import React from 'react';
import TabContentItem from './TabContentItem/TabContentItem';
import styles from "./TabsContent.module.css"
import Divider from '../../../../../global/Divider/Divider';

const Tabscontent = ({list , style}) => {

    const listItems = list;
    return (
        <div className={styles.content} >
            {list?.map((item,index)=>{
                return <>
                <TabContentItem key={index} text={item.text} />
                {index !== listItems.lenght && <Divider />}
                </>
            })}
        </div>
    );
}

export default Tabscontent;
