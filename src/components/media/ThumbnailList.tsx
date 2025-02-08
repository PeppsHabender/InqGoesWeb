import { Box, SxProps, Theme, useMediaQuery } from "@mui/material";
import { theme } from "../../theme/theme.ts";
import images from "virtual:media";

const Thumbnail = ({
    img,
    key,
    selected,
    onSelect,
    sx,
}: {
    img: string;
    key: any;
    selected: boolean;
    onSelect: (img: string) => void;
    sx: SxProps<Theme>;
}) => {
    return (
        <Box
            key={key}
            component="img"
            src={img}
            onClick={() => onSelect(img)}
            sx={{
                height: "100px",
                objectFit: "cover",
                borderRadius: 1,
                mr: 1,
                cursor: selected ? "default" : "pointer",
                transition: "transform 0.3s, opacity 0.3s",
                border: selected ? "2px solid" : "none",
                borderColor: theme.palette.primary.light,
                "&:hover": {
                    transform: selected ? "scale(1)" : "scale(1.05)",
                },
                ...sx,
            }}
        />
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
            display="flex"
            width="100%"
            pb={1}
            maxWidth="100vw"
            sx={{ overflowX: "auto" }}
        >
            {images.map((img, index) => (
                <Thumbnail
                    img={img}
                    key={index}
                    selected={selectedImage === img}
                    onSelect={onSelect}
                    sx={{ height: "100px", mr: 1 }}
                />
            ))}
        </Box>
    );
};

const DesktopThumbnailList = ({
    images,
    selectedImage,
    onSelect,
}: ThumbnailListProps) => {
    return (
        <Box
            gap={3}
            display="grid"
            gridTemplateColumns="repeat(3, minmax(130px, 150px))"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ maxHeight: "100%", overflowY: "auto", p: 2 }}
        >
            {images.map((img, index) => (
                <Thumbnail
                    img={img}
                    key={index}
                    selected={selectedImage === img}
                    onSelect={onSelect}
                    sx={{ width: "100%", height: "auto" }}
                />
            ))}
        </Box>
    );
};

export const ThumbnailList = ({
    selectedImage,
    setSelectedImage,
}: {
    selectedImage: string;
    setSelectedImage: (arg0: string) => void;
}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return isMobile ? (
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
        />
    );
};
