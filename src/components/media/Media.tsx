import { Box, Stack, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { theme } from "../../theme/theme.ts";
import { mediaId } from "../../consts.ts";
import images from "virtual:media";
import { ThumbnailList } from "./ThumbnailList.tsx";
import { useState } from "react";

interface SelectedImagePreviewProps {
    selectedImage: string;
}

const SelectedImagePreview = ({ selectedImage }: SelectedImagePreviewProps) => {
    return (
        <Box
            component="img"
            src={selectedImage}
            flexShrink={0}
            sx={{
                maxWidth: "800px",
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
            }}
        />
    );
};

const ImageGallery = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems="center"
            overflow="hidden"
            sx={{ height: "100%" }}
        >
            <SelectedImagePreview selectedImage={selectedImage} />

            <ThumbnailList
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </Stack>
    );
};

export const InterceptedMedia = () => (
    <Box
        id={mediaId}
        className="snap-item"
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        height="100%"
        py="2em"
    >
        <Typography variant="h2" gutterBottom>
            Intercepted Media
        </Typography>
        <ImageGallery />
    </Box>
);
