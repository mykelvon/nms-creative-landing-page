import Account from "../Home/Components/Navigation/Menu/Account";
import BasicMenu from "../Home/Components/Navigation/Menu/BasicMenu";
import Selected from "../Home/Components/Navigation/Menu/Selected";
import BasicPagination from "../Home/Components/Navigation/Pagination/BasicPagination";
import OutlinedPagination from "../Home/Components/Navigation/Pagination/OutlinedPagination";
import PaginationSize from "../Home/Components/Navigation/Pagination/PaginationSize";
import BasicTabs from "../Home/Components/Navigation/Tabs/BasicTabs";
import Colored from "../Home/Components/Navigation/Tabs/Colored";
import Scrollable from "../Home/Components/Navigation/Tabs/Scrollable";

const NAVIGATION = [
  {
    id: 1,
    name: "MENU",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Selected", "Account"],
    component: [BasicMenu, Selected, Account],
  },
  {
    id: 2,
    name: "PAGINATION",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Outlined", "Size"],
    component: [BasicPagination, OutlinedPagination, PaginationSize],
  },
  {
    id: 3,
    name: "TABS",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Scrollable", "Colored"],
    component: [BasicTabs, Scrollable, Colored ]
  },
];

export default NAVIGATION;
