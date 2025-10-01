"use client";

import clsx from "clsx";
import { useRef } from "react";
import classes from "./Tabs.module.css";

export default function Tabs({
  tabsData = [],
  selected = "",
  setSelected = () => {},
  listClass,
  containerClass,
  variant = "default",
}) {
  const tabRef = useRef(null);

  return (
    <div
      className={clsx(
        variant === "primary" ? classes.primaryContainer : classes.container,
        containerClass
      )}
      ref={tabRef}
    >
      <ul className={classes.ul}>
        {tabsData?.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelected(item?.value)}
            className={clsx(
              classes.list,
              "fs14 fw500",
              selected === item.value && classes.listSelected,
              listClass
            )}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}