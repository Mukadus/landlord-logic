import Filter from "@/components/atoms/Filter";
import { FILTER_OPTIONS } from "@/developmentContext/dropDownOption";
import clsx from "clsx";
import classes from "./PropertyDetailSection.module.css";
import Tabs from "@/components/molecules/Tabs/Tabs";

export default function PropertyDetailSection({
  renderTabs = () => {},
  data,
  filter,
  setFilter,
  showFilter = false,
  tabsData = [],
  selected = "",
  setSelected = () => {},
  showAddress = false,
}) {
  console.log(data);
  return (
    <div className={classes.mainDiv}>
      <div></div>
      <div className={classes.headerDiv}>
        <div className={classes.headerDivContent}>
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
          {showFilter && (
            <div className={classes.filter}>
              <Filter
                setFilter={setFilter}
                filters={filter}
                options={FILTER_OPTIONS}
                title={"Filter"}
              />
            </div>
          )}
        </div>
        {showAddress && (
          <p className={clsx(classes.address, "fs14 fw500")}>
            {data?.location}
          </p>
        )}
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
