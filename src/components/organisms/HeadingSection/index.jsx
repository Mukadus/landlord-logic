import React from "react";
import classes from "./HeadingSection.module.css";
import Input from "@/components/atoms/Input/Input";
import Filter from "@/components/atoms/Filter";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Button from "@/components/atoms/Button";
import Tabs from "@/components/molecules/Tabs";

export default function HeadingSection({
  heading,
  search,
  filter,
  setFilter,
  filters,
  filterOptions,
  filterTitle,
  button,
  onButtonClick,
  buttonText,
  tabs,
  setTabs,
  tabsOptions,
}) {
  return (
    <div className={classes.subHeader}>
      {heading && <h6 className={classes.heading}>{heading}</h6>}
      <div className={classes.searchFilter}>
        {search && (
          <div className={classes.search}>
            <Input
              type="text"
              placeholder="Search"
              inputClass={classes.input}
              leftIcon={<FaSearch color="var(--dark-gray-100)" />}
            />
          </div>
        )}
        {button && (
          <div className={classes.button}>
            <Button
              onClick={onButtonClick}
              label={buttonText}
              leftIcon={<FiUser />}
              className={classes.button}
            />
          </div>
        )}
        {filter && (
          <div className={classes.filter}>
            <Filter
              setFilter={setFilter}
              filters={filters}
              options={filterOptions}
              title={filterTitle}
            />
          </div>
        )}

        {tabs && (
          <div className={classes.tabs}>
            <Tabs
              tabs={tabs}
              setTabs={setTabs}
              tabsOptions={tabsOptions}
            />
          </div>
        )}

      </div>
    </div>
  );
}
