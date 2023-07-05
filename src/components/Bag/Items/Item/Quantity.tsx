import React, { useRef } from "react";

// Custom select component for selecting quantity
const Quantity: React.FC<{
    variantId: number;
    quantity: number;
    quantityAvailable: number;
    disabled?: boolean;
    onChange: (quantity: number)=>void;

}> = ({variantId, quantity, quantityAvailable, disabled, onChange}) => {
    // Use ref to get reference to select element
    const refSelect = useRef<HTMLSelectElement>(null);
  
    // Function to handle select change
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      // Call onChange prop with selected quantity
      onChange(parseInt(event.target.value));
    };
  
    return (
      <div className="rs-iteminfo-quantity">
        <div className="rs-quantity">
          <div className="rs-quantity-selector">
            <div className="rs-quantity-wrapper form-dropdown">
              <select
                ref={refSelect}
                className="rs-quantity-dropdown form-dropdown-select"
                style={{ width: "2.47059rem" }}
                value={quantity}
                onChange={handleSelectChange}
                disabled={disabled}
              >
                {/* Create options for each available quantity */}
                {Array(quantityAvailable)
                  .fill(null)
                  .map((_, idex) => (
                    <option
                      key={`select-variant-color-${variantId}-${idex}`}
                      value={idex + 1}
                    >
                      {idex + 1}
                    </option>
                  ))}
              </select>
              <span
                className="rs-quantity-icon form-dropdown-chevron"
                style={{ zIndex: -1, right: 4, top: 10 }}
              >
                <svg
                  viewBox="0 0 17 8.85"
                  className="as-svgicon"
                  width="14"
                  height="14"
                >
                  <path fill="none" d="M0 0h35v35H0z"></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.25"
                    d="M15 1.13L8.5 7.72 2 1.13"
                  ></path>
                </svg>
              </span>
              <select className="rs-quantity-hidden-select">
                <option>{quantity}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Quantity;