"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadingSection from "@/components/organisms/HeadingSection";
import classes from "./NotifcationsTemplate.module.css";
import { notificationData } from "@/developmentContext/notification";
import NotificationCard from "@/components/molecules/NotificationCard";
// import PaginationComponent from "@/components/molecules/Pagination";
import { RECORDS_LIMIT } from "@/resources/utils/constant";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
// import LoadingSkeleton from "@/components/molecules/LoadingSkeleton";

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
          />
        </Col>
        <Col lg={12}>
          {/* <div className={classes.notificationContainer}>
            <Row>
              {loading === "loading" ? (
                <LoadingSkeleton height={200} />
              ) : notifications?.length === 0 ? (
                <NoDataFound text="No notifications found" />
              ) : (
                notifications?.map((notifications, index) => (
                  <NotificationCard
                    key={index}
                    data={notifications}
                    onClick={onClickNotification}
                  />
                ))
              )}
              <PaginationComponent
                totalPages={Math.ceil(totalRecords / RECORDS_LIMIT)}
                setCurrentPage={(p) => {
                  setCurrentPage(p);
                  getData(p);
                }}
                currentPage={currentPage}
                totalRecords={totalRecords}
              />
            </Row> */}
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
}
