import { useState } from "react";

export default function MenuList(props: { items: any[]; }) {
  const items = props.items.map((item,index)=>{
    return (
        <li>
            <a href={item.url}>{item.label}</a>
        </li>
    )
  })
  return (
    <ul>
        {items}
    </ul>
  );
}
