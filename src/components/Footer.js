import React from "react"
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

const Footer = ({filter, setFilter}) => (
    <div>
        <span>show:</span>
        <FilterLink onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}
                    active={VisibilityFilters.SHOW_ALL === filter}>All</FilterLink>
        <FilterLink onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}
                    active={VisibilityFilters.SHOW_ACTIVE === filter}>ACTIVE</FilterLink>
        <FilterLink onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}
                    active={VisibilityFilters.SHOW_COMPLETED === filter}>COMPLETED</FilterLink>
    </div>
);
export default Footer