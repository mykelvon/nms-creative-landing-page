import { CopyToClipboard } from "react-copy-to-clipboard";
import * as SolarIconSet from "solar-icon-set";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight } from "react-syntax-highlighter";
import { Box, Icon, Stack } from "nms-creative-ui";
import { useSnackbar } from "notistack";
import { IconButton } from "nms-creative-ui";

const CodeBlock = ({ code, language }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCopyToClipboard = () => {
    enqueueSnackbar("Copied to Clipboard!", {
      variant: "info",
      autoHideDuration: 3000,
      action: (key) => (
        <IconButton
          color="info"
          size="medium"
          aria-label="close"
          severity="info"
          onClick={() => closeSnackbar(key)}
        >
          <SolarIconSet.CloseCircle fontSize={24} />
        </IconButton>
      ),
      icon: (
        <Icon color="success">
          <SolarIconSet.InfoSquare size={24} iconStyle="BoldDuotone" />
        </Icon>
      ),
    });
  };

  return (
    <Box
      sx={{
        padding: {mobile: "8px", tablet: "24px",},
        borderRadius: "16px",
        backgroundColor: "#011627",
        overflow: "auto",
        maxHeight: "70vh",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <PrismLight style={nightOwl} language={language} showLineNumbers >
          {code}
        </PrismLight>
        <CopyToClipboard text={code} onCopy={handleCopyToClipboard}>
          <IconButton color="neutral">
            <SolarIconSet.Copy size={24} iconStyle="BoldDuotone" />
          </IconButton>
        </CopyToClipboard>
      </Stack>
    </Box>
  );
};

export default CodeBlock;