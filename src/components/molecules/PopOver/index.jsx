"use client";

import { ClickAwayListener } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Style from "./PopOver.module.css";

export default function PopOver({
  popover = [],
  onClick = () => {},
  children = null,
}) {
  const [show, setShow] = useState(false);

  const overlayPopover = (
    <Popover
      id="popover-basic"
      className={Style?.overlayPopover}
      popover="false"
    >
      <ClickAwayListener onClickAway={() => setShow(false)}>
        <Popover.Body className="p-0 m-0">
          <ul className={clsx(Style.overlay, "m-0 p-0")}>
            {Array.isArray(popover) && popover.length > 0 ? (
              popover?.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    Style.overlayLink,
                    item?.borderBottom && Style.borderBottom,
                    item?.borderTop && Style.borderTop
                  )}
                  onClick={() => {
                    onClick(item?.label);
                    setShow(false);
                  }}
                >
                  {item?.icon && (
                    <div className={clsx(Style.iconDiv)}>{item?.icon}</div>
                  )}
                  <span className={clsx("text-black body05", Style.label)}>
                    {item?.label}
                  </span>
                </li>
              ))
            ) : (
              <div className={Style.noOption}>
                <li>No options available</li>
              </div>
            )}
          </ul>
        </Popover.Body>
      </ClickAwayListener>
    </Popover>
  );

  return (
    <>
      <div>
        <OverlayTrigger
          trigger="click"
          placement="bottom-start"
          overlay={overlayPopover}
          show={show}
          onToggle={() => setShow(!show)}
        >
          <div onClick={() => setShow(true)}>
            {children ? (
              children
            ) : (
              <HiOutlineDotsVertical
                className={Style.icon}
                fontSize={16}
                color="#A4A7AE"
                size={16}
              />
            )}
          </div>
        </OverlayTrigger>
      </div>
    </>
  );
}
