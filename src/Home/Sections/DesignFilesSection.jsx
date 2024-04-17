import { Button, Card, Grid, Stack, Typography } from "nms-creative-ui";
import { Link } from "react-router-dom";
import CustomDivider from "../../Components/Generic Components/General Components/CustomDivider";
import DESIGNFILES from "../../DATA/designFiles";

const DesignFilesSection = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        textAlign: "center",
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="h4" color="text.main">
          Easy View Files
        </Typography>
        <Typography variant="h2" color="primary">
          Figma Design Files
        </Typography>
        <CustomDivider />
      </Stack>
      <Typography variant="body1" color="text.main">
        Level up your Figma design workflow with NMS Creative UI – a treasure
        trove of design elements and components that seamlessly integrate to
        bring your creative vision to life.
      </Typography>
      <Button
        component={Link}
        sx={{
          fontWeight: "700",
          width: { mobile: "100%", tablet: "max-content" },
        }}
        startIcon={
          <img
            loading="lazy"
            src="/svg images/figma logo.svg"
            alt="Figma logo"
            style={{
              width: "24px",
            }}
          />
        }
      >
        Explore In Figma
      </Button>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1300px",
          textAlign: { mobile: "center", tablet: "left" },
        }}
      >
        {DESIGNFILES.map((item, index) => (
          <Grid item tablet={6} laptop={4} mobile={12} key={index}>
            <Card
              elevation={4}
              sx={{
                backgroundImage: `url("/images/CardBg.png")`,
                "&.MuiPaper-elevation4": {
                  padding: { mobile: "24px", desktop: "48px" },
                },
                display: "flex",
                flexDirection: "column",
                minHeight: { mobile: "436px", desktop: "550px" },
              }}
            >
              <Stack
                spacing={2}
                sx={{
                  marginBottom: {
                    mobile: "48px",
                    tablet: "24px",
                    laptop: "auto",
                  },
                }}
              >
                <Typography variant="h6" color="secondary">
                  {item.title}
                </Typography>
                <Typography variant="h4" color="text.main">
                  {item.subtitle}
                </Typography>
                <Typography variant="body1" color="text.main">
                  {item.description}
                </Typography>
              </Stack>
              <img loading="lazy" src={item.imageSource} alt={item.alt} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default DesignFilesSection;
