import React from 'react';
import Item from './Item'

function List({items}) {
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

export default List;