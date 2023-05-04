import { useState } from "react";

export default function MenuList() {
  const [item, setItem] = useState([
    {
      item: "Colors",
    },
    {
        item:"Typography"
    },
    {
        item:"Spaces"
    },
    {
        item:"Buttons"
    },
    {
        item:"Inputs"
    },
    {
        item:"Grid"
    }
  ]);
  return {};
}
