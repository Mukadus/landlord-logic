"use client";

import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import useAxios from "@/interceptor/axios-functions";
import { cmsTableHeader, cmsBodyData } from "@/developmentContext/cms";
import classes from "./CmsViewTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import HeadingSection from "@/components/organisms/HeadingSection";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PopOver from "@/components/molecules/PopOver";

export default function CMSTemplate() {
    const { Get } = useAxios();
    const router = useRouter();

    const [data, setData] = useState(cmsBodyData);
    const [loading, setLoading] = useState("table"); // table

    // get data
    const getData = async (_pg = 1, _s = "") => {
        const route = `cms/page/all`;
        setLoading("table");
        const { response } = await Get({ route });
        setLoading("");

        if (response) {
            const res = response?.data;
            const dataArray = Object.keys(res)
                ?.filter((key) => !unwantedKeys.includes(key))
                .map((key) => {
                    return {
                        pageName: key,
                    };
                });
            setData(dataArray);
        }
    };

    // useEffect(() => {
    //     getData();
    // }, []);

    const popoverOptions = [
        {
            label: "Edit",
            value: "edit",
        },
    ];

    const onClickPopover = (value, rowItem) => {
        if (value === "edit") {
            router.push(`/cms/${rowItem.pageName}`);
        }
    };
    return (
        <Container fluid>
            <Row className="gy-4">
                <Col lg={12}>
                    <HeadingSection
                        heading="CMS"
                        className={classes.headingSection}
                    />
                </Col>
                <Col lg={12}>
                    <ResponsiveTable
                        data={data}
                        tableHeader={cmsTableHeader}
                        loading={loading === "table"}
                        noDataText="No pages found"
                        hasPagination={false}
                        renderItem={({ item, key, rowIndex, renderValue }) => {
                            const rowItem = data[rowIndex];

                            if (renderValue) {
                                return renderValue(item, rowItem);
                            }

                            if (key == "sNo") {
                                return rowIndex + 1;
                            }

                            if (key == "action") {
                                return (
                                    <div className={classes.actionButtons}>
                                        <PopOver
                                            popover={popoverOptions}
                                            onClick={(val) => {
                                                onClickPopover(val, rowItem);
                                            }}
                                        />
                                    </div>
                                );
                            }
                            return item || "";
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

const unwantedKeys = ["_id", "updatedAt", "__v", "createdAt"];
//  cms detail