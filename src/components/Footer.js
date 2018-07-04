import React from "react"
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

const Footer = () => (
    <div>
        <span>show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
    </div>
);
export default Footer