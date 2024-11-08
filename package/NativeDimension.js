import React from "react";

// eslint-disable-next-line import/namespace
import { Dimensions } from "react-native";
const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export default function NativeDimension(props) {
  const { children, setDimensions } = props;

  React.useEffect(() => {
    setDimensions({
      screenFontScale: screenDimensions.fontScale,
      screenHeight   : screenDimensions.height,
      screenScale    : screenDimensions.scale,
      screenWidth    : screenDimensions.width, 
      windowFontScale: windowDimensions.fontScale,
      windowHeight   : windowDimensions.height,
      windowScale    : windowDimensions.scale,
      windowWidth    : windowDimensions.width,
    });
  }, []);
    
  return <>{children}</>;
}