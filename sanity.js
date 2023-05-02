import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "8ghvv91h",
  dataset: "production",
  useCdn: true,
  apiVersion: '2022-01-12'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;