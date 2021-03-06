import React from "react";

export const buttonSection: object = {
  position: "relative",
  width: "100%",
  flex: 1,
};

export const card: object = {
  backgroundColor: "white",
  paddingHorizontal: 25,
  paddingVertical: 40,
  borderRadius: 25,
  alignItems: "center",
  elevation: 1,
};

export const container: object = {
  paddingHorizontal: 25,
  width: "100%",
};

export const mb1: object = {
  marginBottom: 10,
};

export const mb2: object = {
  marginBottom: 20,
};

export const parent: object = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
};

export const titlePage: object = {
  fontSize: 32,
  color: "white",
  textAlign: "center",
};

export const wrapperCard: object = {
  width: "100%",
  position: "absolute",
  bottom: 0,
  justifyContent: "flex-end",
};

interface StyleProps {
  diametre?: number;
  data: any;
}

export const circle: any = (diametre = 50, borderWidth = 0) => {
  const data = {
    height: diametre,
    width: diametre,
    borderRadius: diametre / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: borderWidth,
    borderColor: "#11592B",
    overflow: "hidden",
  };

  return data;
};
