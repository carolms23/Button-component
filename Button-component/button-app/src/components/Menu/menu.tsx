import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function MenuList(props: { items: string[]; }) {
  const items = props.items.map((item: string ,index: number)=>{
    return(
        <li>
            <a>{item}</a>
        </li>
  )})
  return (
    <ul>
       {items}
    </ul>
  );
}

export default MenuList;
