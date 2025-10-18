// Lazy load gallery images
const gallery2 = new URL('../images/gallery2.jpeg', import.meta.url).href;
const gallery4 = new URL('../images/gallery4.jpeg', import.meta.url).href;
const gallery5 = new URL('../images/gallery5.jpeg', import.meta.url).href;
const gallery6 = new URL('../images/gallery6.jpeg', import.meta.url).href;
const gallery7 = new URL('../images/gallery7.jpeg', import.meta.url).href;
const gallery8 = new URL('../images/gallery8.jpeg', import.meta.url).href;
const gallery9 = new URL('../images/gallery9.jpeg', import.meta.url).href;
const gallery12 = new URL('../images/gallery12.jpg', import.meta.url).href;
const gallery13 = new URL('../images/gallery13.jpg', import.meta.url).href;


export const galleryImages =[
    {
        id : 1,
        src:gallery12,
        alt:'Image 1',
    },
    {
        id: 2,
        src:gallery2,
        alt:'Image 2',
    },
    {
        id: 3,
        src:gallery13,
        alt:'Image 3',
    },
    {
        id: 4,
        src:gallery4,
        alt:'Image 4',
    }, 
    {
        id: 5,
        src: gallery5,
        alt:'Image 5',
    },
    {
        id: 6,
        src:gallery6,
        alt:'Image 6',
    },
       
    {
        id: 7,
        src: gallery7,
        alt:'Image 7',
    },
       
    {
        id: 8,
        src:gallery8,
        alt:'Image 8',
    },
       
    {
        id: 9,
        src:gallery9,
        alt:'Image 9',
    },

    
];
