import { sanityClient } from '../lib/sanityClient'

export async function fetchAboutContent() {
  const query = `*[_type == "about"][0]{ content, images }`

  try {
    const result = await sanityClient.fetch(query)
    console.log("✅ About data fetched:", result)
    return result
  } catch (error) {
    console.error("❌ Error fetching about content:", error)
    return null
  }
}
