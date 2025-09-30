"use client";
import { NAV_DATA } from "@/developmentContext/app-data";
// import { getInitials } from "@/resources/utils/helper";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import classes from "./SideBar.module.css";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { TOKEN_COOKIE_NAME } from "@/resources/utils/cookie";
import Cookies from "js-cookie";

export default function SideBar({ isCollapsed, setIsCollapsed }) {
  const router = useRouter();
  const pathName = usePathname();
  const { user } = useSelector((state) => state.authReducer);

  const logout = () => {
    router?.push("/");
    Cookies.remove(TOKEN_COOKIE_NAME);
  };

  return (
    <div className={clsx(classes.sideBar, isCollapsed && classes.collapsed)}>
      <div className={classes.logoContainer}>
        <div
          className={clsx(
            "cp",
            classes.logo,
            isCollapsed && classes.collapsedLogo
          )}
          onClick={() => router.push("/dashboard")}
        >
          <Image src={"/svgs/logo.svg"} alt="logo" fill />
        </div>
        <p
          className={clsx(
            classes.logoText,
            isCollapsed && classes.collapsedLogoText
          )}
        >
          MyLandlordLogic
        </p>
      </div>
      <div className={classes.nav}>
        <div className={isCollapsed ? classes.subNavItem : ""}>
          {NAV_DATA?.map((item, index) => (
            <div
              className={clsx(
                item?.path === pathName && classes.selectedNavItem,
                classes.navItem,
                isCollapsed && classes.closedNavItem
              )}
              key={index}
              onClick={() => router.push(item?.path)}
              title={isCollapsed ? item?.title : ""}
            >
              <div className={classes.navItemIcon}>
                <Image src={item?.image} alt={item?.title} fill />
              </div>
              {!isCollapsed && (
                <p
                  className={`fs-14 lh-24 ${
                    item?.path === pathName ? "fw-700" : "fw-500"
                  }`}
                >
                  {item?.title}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className={isCollapsed ? classes.subNavItem : ""}>
          {/* {SIDE_BAR_BOTTOM_DATA?.map((item, index) => (
            <div
              className={clsx(
                item?.path === pathName && classes.selectedNavItem,
                classes.navItem,
                isCollapsed && classes.closedNavItem
              )}
              key={index}
              onClick={() => router.push(item?.path)}
              title={isCollapsed ? item?.title : ""}
            >
              {item?.icon}
              {!isCollapsed && (
                <p
                  className={`fs-14 lh-24 ${
                    item?.path === pathName ? "fw-700" : "fw-500"
                  }`}
                >
                  {item?.title}
                </p>
              )}
            </div>
          ))} */}
          {/* <div className={classes.profile}>
            <div className={classes.profileImage}>
              {getInitials(user?.fullName)}
            </div>
            {!isCollapsed && (
              <div>
                <p className={clsx(classes.fullName, "fs-14 lh-20 fw-600")}>
                  {user?.fullName}
                </p>
                <p className="fs-13 lh-20 fw-400 maxLine1">{user?.email}</p>
              </div>
            )}
            {!isCollapsed && (
              <FiLogOut size={20} className={classes.icon} onClick={logout} />
            )}
          </div> */}
        </div>
      </div>
      <button
        className={classes.collapseButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <RiArrowRightSLine size={24} />
        ) : (
          <MdKeyboardArrowLeft size={24} />
        )}
      </button>
    </div>
  );
}
