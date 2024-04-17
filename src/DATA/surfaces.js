import Controlled from "../Home/Components/Surfaces/Accordion/Controlled";
import Simple from "../Home/Components/Surfaces/Accordion/Simple";
import Basics from "../Home/Components/Surfaces/Card/Basics";
import ComplexInteraction from "../Home/Components/Surfaces/Card/ComplexInteraction";
import Customization from "../Home/Components/Surfaces/Paper/Customization";
import PaperElevation from "../Home/Components/Surfaces/Paper/PaperElevation";

const SURFACES = [
    {
      id: 1,
      name: "Accordion",
      first_value: "1",
      second_value: "2",
      label: ["Simple", "Controlled"],
      component: [Simple, Controlled]
    },
    {
      id: 2,
      name: "Card",
      first_value: "1",
      second_value: "2",
      label: ["Basics", "Complex"],
      component: [Basics, ComplexInteraction]
    },
    {
      id: 3,
      name: "Paper",
      first_value: "1",
      second_value: "2",
      label: ["Elevation", "Customization"],
      component: [PaperElevation, Customization]
    },
  ];
  
  export default SURFACES;
  