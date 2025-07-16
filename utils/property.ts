import { StaticImageData } from "next/image";

export interface PropertyFeature {
  title: string;
  body: string;
  img: StaticImageData;
}

export type PropertyType = "emerald" | "oak";

export interface PropsFacilitiesProps {
  activeProperty: PropertyType;
}
