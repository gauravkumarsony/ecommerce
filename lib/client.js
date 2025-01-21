import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
//connecting(linking) to sanity
export const client = sanityClient({
  projectId: "tn4zbtdh",
  dataset: "production",
  apiVersion: "2025-01-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
    
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
