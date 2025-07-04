import {createClient} from '@sanity/client';

export const sanityClient = createClient({
    projectId: '6dl0vpkx', // Replace with your Sanity project ID
    dataset: 'production',
    apiVersion: '2024-01-01', // Use a specific API version
    useCdn: false, // Use the CDN for faster response times
});
