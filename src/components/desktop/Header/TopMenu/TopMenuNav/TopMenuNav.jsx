import React from 'react'
import NavItem from './NavItem/NavItem'

const topMenuItemsJson = [
  {
    title:"مجله"
  },
  {
    title:"مطالب کاربران"
  },  {
    title:"مشاوره"
  },  {
    title:"تماس با ما"
  },  {
    title:"برند ها"
  },
]

function TopMenuNav() {
  return (
    <div className='d-flex'>
      {topMenuItemsJson.map((item, index)=>{
        return <NavItem key={index} text={item.title} />
      })}
    </div>
  )
}

export default TopMenuNav