import style from './Menu.module.css'

function MenuList(props: { items: string[]; }) {
  const items = props.items.map((item: string ,index: number)=>{
    return(
        <li className={style.menu}>
            <a>{item}</a>
        </li>
  )})
  return (
    <ul className={style.menu_list_container}>
       {items}
    </ul>
  );
}

export default MenuList;
