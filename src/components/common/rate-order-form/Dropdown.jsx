import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Style from "./Styles.module.scss";
import React from "react";

const Dropdown = ({
  type,
  setVehicalType,
  setWeight,
  shouldDDClose,
  setShouldDDClose,
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const getItems = (type) => {
    if (type === "ftl")
      return [
        { id: 1, value: "Three Wheeler / 5 x 4 ft / 0.3 T / Open & Close" },
        { id: 2, value: "EV Tata Ace / 1 T / 7*4.5 / closed" },
        { id: 3, value: "TATA ACE / 0.8 T / 7*5 ft / Closed" },
        { id: 4, value: "TATA 407 / 1.5 T / 9*6 ft / Open" },
        { id: 5, value: "EICHER 709 / 3 T / 14*7 ft / Closed" },
        { id: 6, value: "EICHER 909 / 5 T / 17*7 ft / Closed" },
        { id: 8, value: "EICHER 1109 / 7 T / 19*7 ft / Open" },
        { id: 9, value: "EICHER 1109 / 7 T / 19*7 ft / Open" },
        { id: 10, value: "EICHER 1110 / 8 T / 20*7.5 ft / Closed" },
        { id: 11, value: "EICHER 2114 / 20 ft / Cont. body / 6.5 T" },
        { id: 12, value: "TATA 1613 / 20*7.5 ft / 9 Ton / Open" },
        { id: 13, value: "TATA 1612 -16 Ton 22*8ft / Open" },
        { id: 14, value: "TATA 1613 / 20*7.5 ft / 9 Ton / Open Dhala JCB" },
        { id: 15, value: "TATA 1613 / 24*7.5 ft / 9 Ton / Open Dhala JCB" },
        { id: 16, value: "EICHER 1613 / 9 Tons / 32*8*8 / Open Dhala JCB" },
        { id: 17, value: "EICHER 1613 / 14 Tons / 32*8*8 / Open Dhala JCB" },
        { id: 18, value: "EICHER 1613 / 7 Ton / 32*8 ft XL Cont." },
        { id: 19, value: "EICHER 1613 / 32*9 ft / 7 T / High Cube" },
        { id: 20, value: "EICHER 1613 /32*8 ft XXL / 14 Ton" },
        { id: 21, value: "EICHER 1613 /32*8 ft XXL / 18 Ton" },
        { id: 22, value: "TATA 1613 / 20*7.5 ft / 10 Ton / Open" },
        { id: 23, value: "TATA 1612 -16 Ton 22*8ft / Open / Taurus" },
        { id: 24, value: "TATA LPT 3118 / 21 Ton 24*8 ft / Open / Taurus" },
        { id: 25, value: "TATA LPT 3118 / 21 Ton 24*8 ft / Open / Taurus" },
        { id: 26, value: "TATA LPT 3723 / 28 Ton 28*8 ft / Open / Taurus" },
        { id: 27, value: "20*8 ft / 4018 / 30 T / Trailer" },
        { id: 28, value: "High Bed / 40 * 8 ft / 4018 / 30 T Trailer" },
        { id: 29, value: "Semi Bed / 4018 / 28 T / Trailer" },
        { id: 30, value: "Low Bed / 4018 / 28 T / Trailer" },
        { id: 31, value: "LNG Truck / 40T / 8*8ft / Open" },
        { id: 32, value: "Tipper / 6 T" },
        { id: 33, value: "Tipper / 15 T" },
        { id: 34, value: "Tusker - 20*8 weight capacity 8 tons" },
      ];
    if (type === "ptl")
      return [
        { id: 1, value: "Gram" },
        { id: 2, value: "KG" },
        { id: 3, value: "Ton" },
      ];
    if (type === "express")
      return [
        { id: 1, value: "Gram" },
        { id: 2, value: "KG" },
        { id: 3, value: "Ton" },
      ];
  };
  const items = getItems(type);
  const handleItemClick = (e, item) => {
    setShowDropdown(!showDropdown);
    setSelectedValue(item.value);
    if (type === "ftl") setVehicalType(item.value);
    if (type === "ptl") setWeight(item.value);
    if (type === "express") setWeight(item.value);
  };

  React.useEffect(() => {
    setSelectedValue("");
  }, [type]);
  React.useEffect(() => {
    console.log(shouldDDClose);
    if (shouldDDClose) {
      setShowDropdown(false);
      setShouldDDClose(false);
    }
  }, [shouldDDClose]);

  return (
    <div
      className={Style.dropdown}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div>{selectedValue || (type === "ftl" ? "Vehical Type" : "Weight")}</div>
      <div>
        {showDropdown ? <UpOutlined />:<DownOutlined />}
      </div>
      {showDropdown && (
        <div className={Style.items}>
          {items.map((item) => (
            <div key={item.id} onClick={(e) => handleItemClick(e, item)}>
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
