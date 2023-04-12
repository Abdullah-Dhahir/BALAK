import { Typography, useTheme, Icon } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import InstagramIcon from "@mui/icons-material/Instagram";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsered
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="assets/erbil.jfif"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }} />
            <FlexBetween>
                <Typography color={main}>Erbil,Kurdistan</Typography>
                <FlexBetween alignItems="center">
                    <Icon>
                        <InstagramIcon />
                    </Icon>
                    <Typography color={medium} sx={{ ml: 0.5 }}>visiterbilofficial</Typography>
                </FlexBetween>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0" style={{ textAlign: "center" }}>
                NO FRIENDS BUT THE MOUNTAINS.
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;
