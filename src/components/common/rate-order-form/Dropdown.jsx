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
