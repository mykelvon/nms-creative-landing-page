import AlertDialog from "../Home/Components/Feedback/Dialog/AlertDialog";
import BasicDialog from "../Home/Components/Feedback/Dialog/BasicDialog";
import Circular from "../Home/Components/Feedback/Progress/Circular";
import LinearUsage from "../Home/Components/Feedback/Progress/LinearUsage";
import BasicSnackbar from "../Home/Components/Feedback/Snackbar/BasicSnackbar";
import OpenSnackbar from "../Home/Components/Feedback/Snackbar/OpenSnackbar";

const FEEDBACK = [
    {
      id: 1,
      name: "Dialog",
      first_value: "1",
      second_value: "2",
      label: ["Basic", "Alert"],
      component: [BasicDialog, AlertDialog],
    },
    {
      id: 2,
      name: "Progress",
      first_value: "1",
      second_value: "2",
      label: ["Circular", "Linear"],
      component: [Circular, LinearUsage],
    },
    {
      id: 3,
      name: "Snackbar",
      first_value: "1",
      second_value: "2",
      label: ["Open", "Basic"],
      component: [OpenSnackbar, BasicSnackbar]
    },
  ];
  
  export default FEEDBACK;
  