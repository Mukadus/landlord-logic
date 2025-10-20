import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Drawer from "react-modern-drawer";
import classes from "./MobileDrawer.module.css";
import Button from "@/components/atoms/Button";
import { NAV_DATA } from "@/developmentContext/app-data";
import { useDispatch } from "react-redux";
import { signOutRequest } from "@/store/auth/authSlice";
import { removeTokenCookie} from "@/resources/utils/cookie";

export default function MobileDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const pathName = usePathname();

    const logout = () => {
        dispatch(signOutRequest());
        removeTokenCookie();
        router.push("/");
    };
    // const accessToken = "true";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={classes.mainDiv}>
            <div className={classes.header}>
                <Container fluid>
                    <Row>
                        <Col xs={8}>
                            <div className={classes.logoDiv} onClick={() => router.push("/")}>
                                <Image src={"/svgs/logo.svg"} alt="logo" fill />
                            </div>
                        </Col>
                        <Col xs={4} className={classes.barsIcon}>
                            <div onClick={toggleDrawer}>
                                <HiOutlineBars3BottomLeft
                                    size={40}
                                    color="var(--primary-dark)"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    className={classes.drawer}
                >
                    <div className={classes.MobileDrawer}>
                        <div className={classes.top}>
                            <div className={classes.headerDiv}>
                                <div
                                    className={clsx(
                                        "cp",
                                        classes.logo,
                                    )}
                                    onClick={() => router.push("/dashboard")}
                                >
                                    <Image src={"/svgs/logo.svg"} alt="logo" fill />
                                </div>
                                <p
                                    className={clsx(
                                        classes.logoText)}
                                >
                                    MyLandlordLogic
                                </p>
                            </div>

                            <div className={classes.navigationDiv}>
                                {NAV_DATA.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item?.path}
                                        className={clsx(classes.navItem, item?.path === pathName ? classes.active : "")}

                                    >
                                        <div className={classes.navItemIcon}>
                                            <Image src={item?.image} alt={item?.title} fill />
                                        </div>
                                        <p className={clsx(classes.navItemText, "fw500 fs14")}>{item?.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.bottomSection}>

                            <div className={classes.buttonSection}>
                                <Button
                                    variant="primary"
                                    label="Logout"
                                    onClick={logout}
                                />
                            </div>

                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
