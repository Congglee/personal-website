import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import config from "general.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const STRAPI_URL = `${config.strapiDomain}`;

export const strapiImage = (image: any) => {
  if (!image?.url) {
    return;
  }
  const strapiImage = {
    url: `${STRAPI_URL}${image?.url}`,
    altText: image.alternativeText ? image.alternativeText : "Strapi Image",
    width: image?.width,
    height: image?.height,
  };

  return strapiImage;
};
