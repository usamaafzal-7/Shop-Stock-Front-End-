import Box from "@mui/material/Box";
import HeaderSection from "./HeaderSection";

const WebBar = () => {
  return (
    <Box
      padding={"10px"}
      width="100vw"
      bgcolor="#232f3e"
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <HeaderSection />
    </Box>
  );
};

export default WebBar;
