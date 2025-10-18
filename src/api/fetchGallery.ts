import { sanityClient } from '../lib/sanityClient';

export interface GalleryImage {
  _id: string;
  title: string;
  alt: string;
  order: number;
  featured: boolean;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

/**
 * Fetch all gallery images from Sanity, ordered by display order
 */
export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "gallery"] | order(order asc) {
    _id,
    title,
    alt,
    order,
    featured,
    image
  }`;

  try {
    const result = await sanityClient.fetch<GalleryImage[]>(query);
    console.log('✅ Gallery images fetched:', result.length, 'images');
    return result;
  } catch (error) {
    console.error('❌ Error fetching gallery images:', error);
    return [];
  }
}

/**
 * Fetch only featured gallery images for the rolling gallery
 */
export async function fetchFeaturedGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "gallery" && featured == true] | order(order asc) {
    _id,
    title,
    alt,
    order,
    featured,
    image
  }`;

  try {
    const result = await sanityClient.fetch<GalleryImage[]>(query);
    console.log('✅ Featured gallery images fetched:', result.length, 'images');
    return result;
  } catch (error) {
    console.error('❌ Error fetching featured gallery images:', error);
    return [];
  }
}
