import React from 'react'
import styles from "./FooterItem.module.css"

const FooterItem = ({headTitle, items}) => {
  return (
    <>
        <div className={styles.footerItem + " col-lg-2 col-12"}>
                <div className='title'><h5>{headTitle}</h5></div>
                <div>
                  <ul>
                      {items.map((item, index)=>{
                          return <li key={index+1} className={"pointer"}><p key={index}>{item}</p></li>
                      })}
                  </ul>
                </div>
              </div>
    </>
  )
}

export default FooterItem