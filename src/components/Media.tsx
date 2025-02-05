import { Box, ImageList, ImageListItem, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { theme } from "../theme/theme";
import { mediaId } from "../consts";
import images from "virtual:media";

const SelectedImage = ({ selectedImg }: { selectedImg: string }) => {
    return (
        <Box
            component="img"
            src={selectedImg}
            alt="Selected"
            sx={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
            }}
        />
    );
};

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Stack
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                overflow: "hidden",
                p: "3em",
            }}
        >
            <SelectedImage selectedImg={selectedImage} />

            <ImageList
                cols={3}
                gap={8}
                sx={{
                    p: 4,
                    flexGrow: 1,
                }}
            >
                {images.map((img, index) => (
                    <ImageListItem
                        key={index}
                        onClick={() => setSelectedImage(img)}
                    >
                        <Box
                            component="img"
                            src={img}
                            alt={`Thumbnail ${index}`}
                            sx={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                cursor:
                                    selectedImage === img
                                        ? undefined
                                        : "pointer",
                                borderRadius: 1,
                                transition:
                                    selectedImage === img ? undefined : "0.3s",
                                "&:hover":
                                    selectedImage === img
                                        ? undefined
                                        : {
                                              transform: "scale(1.05)",
                                              opacity: 0.8,
                                          },
                                border:
                                    selectedImage === img
                                        ? "2px solid"
                                        : "none",
                                borderColor: theme.palette.primary.light,
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>
    );
};

export function InterceptedMedia() {
    return (
        <Box
            id={mediaId}
            className="snap-item"
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="100%"
            p="3em"
            sx={{ scrollSnapAlign: "start" }}
        >
            <Typography variant="h2" gutterBottom>
                Intercepted Media
            </Typography>
            <Box component="div" flexGrow="1" />
            <ImageGallery />
        </Box>
    );
}
