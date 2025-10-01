import React from "react";
import classes from "./HeadingSection.module.css";
import Input from "@/components/atoms/Input/Input";
import Filter from "@/components/atoms/Filter";
import { LuSearch } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import Button from "@/components/atoms/Button";
import Tabs from "@/components/molecules/Tabs/Tabs";

export default function HeadingSection({
  heading,
  search,
  filter,
  setFilter,
  filters,
  filterOptions,
  filterTitle,
  button,
  onClick,
  buttonText,
  tabs,
  setTabs,
  tabsData,
  searchValue,  
  setSearchValue,
}) {
  return (
    <div className={classes.subHeader}>
      {heading && <h6 className={classes.heading}>{heading}</h6>}
      {tabs && (
        <div className={classes.tabs}>
          <Tabs selected={tabs} setSelected={setTabs} tabsData={tabsData} />
        </div>
      )}
      <div className={classes.searchFilter}>
        {search && (
          <div className={classes.search}>
            <Input
              type="text"
              placeholder="Search"
              value={searchValue}
              setValue={setSearchValue}
              inputClass={classes.input}
              leftIcon={<LuSearch color="var(--dark-gray-100)" size={22} />}
            />
          </div>
        )}
        {button && (
          <div className={classes.button}>
            <Button
              onClick={onClick}
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
      </div>
    </div>
  );
}
