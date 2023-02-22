// client.ts
import sanityClient from '@sanity/client'

export default sanityClient({  
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

