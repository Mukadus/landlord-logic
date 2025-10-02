"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingSection from "@/components/organisms/HeadingSection";
import classes from "./NotifcationsTemplate.module.css";
import { notificationData } from "@/developmentContext/notification";
import NotificationCard from "@/components/molecules/NotificationCard";
import { RECORDS_LIMIT } from "@/resources/utils/constant";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import { notificationFilterOptions } from "@/developmentContext/dropDownOption";
// import Pagination from "@/components/molecules/Pagination";

export default function NotificationTemplate() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState(notificationData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(notificationData.length);


  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <HeadingSection
            heading="Notifications"
            search={true}
            filter={true}
            searchValue={search}
            setSearchValue={setSearch}
            className={classes.headingSection}
            filterOptions={notificationFilterOptions}
          />
        </Col>
        <Col lg={12}>
          <div className={classes.notificationContainer}>
            <Row className={classes.notificationCards}>
              {loading === "loading" ? (
                <Col lg={12}>
                  <LoadingSkeleton width={100} height={200} />
                </Col>
              ) : notifications?.length === 0 ? (
                <Col lg={12}>
                  <NoDataFound text="No notifications found" />
                </Col>
              ) : (
                notifications?.map((notifications, index) => (
                  <Col lg={12} key={index} >
                    <NotificationCard
                      key={index}
                      data={notifications}
                      className={classes.notificationCard}
                      // onClick={onClickNotification}
                    />
                  </Col>
                ))
              )}
              {/* <Pagination
                totalRecords={totalRecords}
                setCurrentPage={(p) => {
                  setCurrentPage(p);
                  setNotifications(notificationData);
                }}
                currentPage={currentPage}
              /> */}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
