import React from 'react';
import Item from './Item'

export default function List({items}) {
  return (
    <div>
      {
        items.map(item => {
          return <Item item = {item}/>
        })
      }
    </div> 
  )
}