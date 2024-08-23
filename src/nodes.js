export const initialNodes = [
  {
    id: "1",
    data: { label: "Node-1" },
    position: { x: 300, y: 200 },
    type: "input",
    style: {
      backgroundColor: "skyblue",
      color: "black",
    },
  },
  {
    id: "2",
    position: { x: 150, y: 400 },
    data: {
      label: "Node-2",
    },
    style: {
      backgroundColor: "hotpink",
      fontSize: "20px",
    },
  },
  {
    id: "3",
    position: { x: 450, y: 400 },
    data: { label: "Node-3" },
    style: {
      backgroundColor: "yellow",
    },
  },
  {
    id: "4",
    position: { x: 300, y: 600 },
    type: "output",
    data: {
      label: "Node-4",
    },
    style: {
      backgroundColor: "lightgreen",
    },
  },
];
