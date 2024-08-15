import React from "react";
import { Image as Img, ImageProps } from "@nextui-org/react";

interface IImageProps extends ImageProps {}
const Image: React.FC<IImageProps> = ({ radius, loading, ...props }) => {
  return <Img {...props} loading={loading ?? "lazy"} />;
};

export default Image;
