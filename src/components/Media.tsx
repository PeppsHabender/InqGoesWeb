import { Box, Stack, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import { theme } from "../theme/theme";
import { mediaId } from "../consts";
import images from "virtual:media";
import { useComponentHeight } from "../hooks/ComponentHeight.tsx";

interface SelectedImagePreviewProps {
    selectedImage: string;
    imageRef: React.Ref<HTMLImageElement>;
}

const SelectedImagePreview = ({
    selectedImage,
    imageRef,
}: SelectedImagePreviewProps) => {
    return (
        <Box flexShrink={0}>
            <Box
                ref={imageRef}
                component="img"
                src={selectedImage}
                sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            />
        </Box>
    );
};

interface ThumbnailListProps {
    images: string[];
    selectedImage: string;
    onSelect: (img: string) => void;
}

const MobileThumbnailList = ({
    images,
    selectedImage,
    onSelect,
}: ThumbnailListProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                overflowX: "auto",
                width: "100%",
                pb: 1,
                maxWidth: "100vw", // Ensure it fits within the screen
            }}
        >
            {images.map((img, index) => (
                <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => onSelect(img)}
                    sx={{
                        minWidth: "150px",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 1,
                        mr: 1,
                        cursor: selectedImage === img ? "default" : "pointer",
                        transition: "transform 0.3s, opacity 0.3s",
                        border: selectedImage === img ? "2px solid" : "none",
                        borderColor: theme.palette.primary.light,
                        "&:hover": {
                            transform:
                                selectedImage === img
                                    ? "scale(1)"
                                    : "scale(1.05)",
                        },
                    }}
                />
            ))}
        </Box>
    );
};

interface DesktopThumbnailListProps extends ThumbnailListProps {
    imageHeight: number;
}

const DesktopThumbnailList = ({
    images,
    selectedImage,
    onSelect,
    imageHeight,
}: DesktopThumbnailListProps) => {
    return (
        <Box
            gap={3}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ maxHeight: imageHeight, overflowY: "auto", p: 2 }}
        >
            {images.map((img, index) => (
                <Box
                    key={index}
                    onClick={() => onSelect(img)}
                    component="img"
                    src={img}
                    alt={`Thumbnail ${index}`}
                    sx={{
                        width: "150px",
                        height: "auto",
                        objectFit: "cover",
                        cursor: selectedImage === img ? undefined : "pointer",
                        borderRadius: 1,
                        transition: selectedImage === img ? undefined : "0.3s",
                        "&:hover":
                            selectedImage === img
                                ? undefined
                                : {
                                      transform: "scale(1.05)",
                                      opacity: 0.8,
                                  },
                        border: selectedImage === img ? "2px solid" : "none",
                        borderColor: theme.palette.primary.light,
                    }}
                />
            ))}
        </Box>
    );
};

const ImageGallery = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const imageHeight = useComponentHeight(imageRef);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems="center"
            sx={{ p: 3, overflow: "hidden", height: "100%" }}
        >
            <SelectedImagePreview
                selectedImage={selectedImage}
                imageRef={imageRef}
            />

            {isMobile ? (
                <MobileThumbnailList
                    images={images}
                    selectedImage={selectedImage}
                    onSelect={setSelectedImage}
                />
            ) : (
                <DesktopThumbnailList
                    images={images}
                    selectedImage={selectedImage}
                    onSelect={setSelectedImage}
                    imageHeight={imageHeight}
                />
            )}
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
            margin="auto"
            height="100%"
            p="2em"
            width={"70%"}
        >
            <Typography variant="h2" gutterBottom>
                Intercepted Media
            </Typography>
            <ImageGallery />
        </Box>
    );
}
