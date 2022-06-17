import { Box, Image, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "../../../../../../utils/axios";
import LazyLoad from "react-lazyload";

const ImageItem = ({ image }) => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      try {
        const { data } = await axios.get(`/wp/v2/media/${image}`);
        setUrl(data.media_details.sizes.thumbnail.source_url);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImage();
  }, []);
  return (
    <>
      <LazyLoad
        once={true}
        placeholder={
          <Image className="shopImageItem" src={url} loading={"lazy"} />
        }
      >
        <Box
          mt={"1rem"}
          bg={"white"}
          overflow={"hidden"}
          display={"flex"}
          justifyContent={"center"}
        >
          {url ? (
            <Image className="shopImageItem" src={url} loading={"lazy"} />
          ) : (
            <Skeleton w={150} h={150} />
          )}
        </Box>
      </LazyLoad>
    </>
  );
};

export default ImageItem;
