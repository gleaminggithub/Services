import {createClient} from 'next-sanity';

const sanityClient=createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn:false,
    token:process.env.SANITY_STUDIO_TOKEN,
    apiVersion: "2022-02-03",
})

export default sanityClient;
