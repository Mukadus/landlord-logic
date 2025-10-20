"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideBar from "../SideBar";
import classes from "./SideBarSkeleton.module.css";
import { pagesWithoutSideBar } from "@/developmentContext/app-data";
import AfterLoginHeader from "../AfterLoginHeader";
import { useMobileViewHook } from "@/resources/hooks/useMobileViewHook";
import MobileDrawer from "../MobileDrawer";

export default function SideBarSkeleton({ children }) {
  const pathName = usePathname();
  const { isMobile } = useMobileViewHook(991);

  const [isCollapsed, setIsCollapsed] = useState(false);

  if (pagesWithoutSideBar.includes(pathName) || pathName === "/") {
    return <div>{children}</div>;
  }

  return (
    <div className={classes.mainDiv}>
      {isMobile ? (
        <MobileDrawer/>
      ) : (
        <> 
         <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </>
      )}
      <div className={clsx(isCollapsed ? classes.closedDiv : classes.bodyDiv)}>
        <AfterLoginHeader>{children}</AfterLoginHeader>
      </div>
    </div>
  );
}
