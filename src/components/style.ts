import { StyleSheet } from "react-native";

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 6;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: "absolute",
    borderWidth: ARROW_SIZE,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#B1AFB6",
    marginBottom: 6,
    position: 'absolute',
    right: -5,
  },
  dashedLine: {
    width: 26,
    height: 69,
    borderStyle: 'dashed',
    borderRightWidth: 1.6,
    borderColor: "#B1AFB6",
    borderBottomWidth: 1.6,
  },
  tooltip: {
    position: "absolute",
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    borderRadius: 3,
    overflow: "hidden",
  },
  tooltipText: {
    color: "#fff",
    lineHeight: 16.8,
    fontSize: 13,
    fontWeight: "500"
  },
  tooltipContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    backgroundColor: "#429D47",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  stepNumberContainer: {
    position: "absolute",
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: "hidden",
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: "#FFFFFF",
    backgroundColor: "#27ae60",
  },
  stepNumberText: {
    fontSize: 10,
    backgroundColor: "transparent",
    color: "#FFFFFF",
  },
  button: {},
  buttonText: {
    color: "#fff",
    lineHeight: 16.8,
    fontSize: 13,
    fontWeight: "500"
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  overlayRectangle: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
