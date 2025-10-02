import Filter from "@/components/atoms/Filter";
import { FILTER_OPTIONS } from "@/developmentContext/dropDownOption";
import clsx from "clsx";
import classes from "./PropertyDetailSection.module.css";
import Tabs from "@/components/molecules/Tabs/Tabs";

export default function PropertyDetailSection({
  renderTabs = () => {},
  data,
  tabsData = [],
  selected = "",
  setSelected = () => {},
}) {
  console.log(data);
  return (
    <div className={classes.mainDiv}>
      <div className={classes.headerDiv}>
        <div className={classes.headerLeftDiv}>
          <p className={clsx(classes.title, "fs18 fw600")}>{data?.title}</p>
          <p
            className={clsx(
              classes.status,
              data?.status === "active"
                ? classes.activeStatus
                : classes.inactiveStatus,
              "fs12 fw500"
            )}
          >
            {data?.status}
          </p>
        </div>
      </div>
      <div className={classes.tabsSection}>
        <Tabs
          containerClass={classes.tabs}
          variant="primary"
          tabsData={tabsData}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className={classes.tabsContent}>{renderTabs()}</div>
    </div>
  );
}
