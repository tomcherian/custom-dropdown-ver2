import React from "react";
import "./index.css";

const Dropdown = ({ options, onSelectDropdown }: any) => {
  return (
    <div className="dropdown-wpr">
      {options.length ? (
        options.map((option: any, id: number) => (
          <div
            className="dropdown-items"
            key={id}
            onClick={() => {
              onSelectDropdown(option.name.common);
            }}
          >
            {option.name.common}
          </div>
        ))
      ) : (
        <div className="dropdown-items">No Options got it</div>
      )}
    </div>
  );
};

export default Dropdown;
