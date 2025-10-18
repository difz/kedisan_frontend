# 📸 Sanity Gallery Setup Guide

Your frontend is now ready to use Sanity for gallery images! Follow these steps to upload your images.

## ✅ What's Already Done:

1. ✅ Backend schema created (`gallery.ts`)
2. ✅ Frontend API functions created (`fetchGallery.ts`)
3. ✅ Gallery component updated to fetch from Sanity
4. ✅ Rolling Gallery updated to use featured images from Sanity

## 🚀 Step-by-Step Upload Instructions:

### Step 1: Start Sanity Studio

```bash
cd /home/rakuro/Documents/Web/Kedisan/kedisan_backend
npm run dev
```

This will start Sanity Studio at `http://localhost:3333`

### Step 2: Access Sanity Studio

1. Open your browser and go to `http://localhost:3333`
2. You should see "Gallery" in the sidebar menu

### Step 3: Upload Images

For each image in `src/images/gallery*.jpeg`:

1. Click **"Gallery"** in the sidebar
2. Click **"+ Create"** button (top right)
3. Fill in the fields:
   - **Title**: Give it a descriptive name (e.g., "Rice Terrace Sunset")
   - **Image**: Click to upload your image file
   - **Alt Text**: Describe the image (e.g., "Green rice terraces at sunset")
   - **Display Order**: Number from 1-13 (order they appear in gallery)
   - **Featured Image**: ✅ Check this if you want it in the rolling gallery on homepage

4. Click **"Publish"** (top right)

### Step 4: Recommended Upload Order

Upload your 13 images in this order for the rolling gallery:

| Order | File | Title Suggestion | Featured? |
|-------|------|------------------|-----------|
| 1 | gallery12.jpg | Mountain Landscape | ✅ Yes |
| 2 | gallery2.jpeg | Village View 1 | ✅ Yes |
| 3 | gallery13.jpg | Panoramic View | ✅ Yes |
| 4 | gallery4.jpeg | Rice Terraces | ✅ Yes |
| 5 | gallery5.jpeg | Village Scene | ✅ Yes |
| 6 | gallery6.jpeg | Nature Path | ✅ Yes |
| 7 | gallery7.jpeg | Tropical Landscape | ✅ Yes |
| 8 | gallery8.jpeg | Green Fields | ✅ Yes |
| 9 | gallery9.jpeg | Village View 2 | ✅ Yes |
| 10 | gallery10.jpeg | Mountain Range | No |
| 11 | gallery11.jpeg | Countryside | No |
| 12 | gallery1.jpeg | Traditional View | No |
| 13 | gallery3.jpeg | Scenic Vista | No |

**Note**: Mark the first 9 as "Featured" for the rolling gallery (homepage). Keep the rest for the main gallery page only.

### Step 5: Verify Images Are Showing

1. Go to your frontend: `http://localhost:5173/gallery`
2. You should see your Sanity images loading!
3. Go to homepage and scroll to "See More" section
4. Featured images should appear in the rolling gallery

## 🎨 Image Optimization Benefits:

- **Auto-optimized**: Sanity compresses images automatically
- **WebP format**: Served to supporting browsers
- **CDN delivery**: Fast loading globally
- **Responsive sizing**: Images resize based on screen

## 💡 Pro Tips:

### For Best Quality:
- Upload images at **1920px** wide (max)
- Use **JPG format** for photos
- Images will be auto-compressed to ~200-400KB

### Managing Images:
- Edit any gallery item by clicking on it
- Change order by updating the "Display Order" number
- Toggle "Featured" to add/remove from rolling gallery
- Delete unused images

## 🗑️ After Upload Complete:

Once all images are in Sanity and displaying correctly:

1. You can safely delete local images:
   ```bash
   # DON'T run this yet! Wait until you verify everything works
   rm -rf src/images/gallery*.jpeg
   rm -rf src/images/gallery*.jpg
   ```

2. Delete the old GalleryData file:
   ```bash
   rm src/data/GalleryData.tsx
   ```

This will reduce your repo size from **42MB to ~2MB**!

## 🔧 Troubleshooting:

**Images not showing?**
- Check Sanity Studio is running
- Verify images are Published (not just saved as draft)
- Check browser console for errors
- Verify .env file has correct Sanity credentials

**Need to change something?**
- Go back to Sanity Studio
- Click the gallery item
- Make changes
- Click "Publish" again
- Refresh your frontend

## 📝 Next Steps:

1. Upload your images to Sanity Studio
2. Test on frontend
3. Once working, delete local images
4. Deploy! Your images will be served from Sanity's CDN

Need help? Check the console logs - they show when images are fetched successfully!
