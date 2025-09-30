import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Filter.module.css";
import { FILTER_OPTIONS } from "@/developmentContext/dropDownOption";
import { VscSettings } from "react-icons/vsc";

export default function Filter ({ setFilter, filters, options, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = (filterOption) => {
    setIsOpen(false);
    setFilter(filterOption);
  };

  const filtersOptions = options ?? FILTER_OPTIONS;

  return (
    <div className={classes.container}>
      <button
        className={clsx(classes.trigger, { [classes.active]: isOpen })}
        ref={triggerRef}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <VscSettings className={classes.icon}/>
        <span className={classes.triggerText}>Filter</span>
      </button>

      {isOpen && (
        <div className={classes.popover} ref={popoverRef}>
          <div className={classes.popoverHeader}>
            <h6>Filter by Status</h6>
          </div>
          <div className={classes.popoverContent}>
            {filtersOptions?.map((option) => (
              <button
                key={option.value}
                className={clsx(classes.filterButton, {
                  [classes.active]: filters === option.value,
                })}
                onClick={() => handleFilterClick(option.value)}
              >
                <div className={classes.filterContent}>
                  <span className={classes.filterLabel}>{option.label}</span>
                </div>
                {filters === option.value && (
                  <div className={classes.checkIcon}>✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
