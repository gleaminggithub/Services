/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['lh3.googleusercontent.com',"plus.unsplash.com","images.unsplash.com"],
    }
};

export default nextConfig;

// explanation of const nextConfig = {
//     images:{
//         domains:['lh3.googleusercontent.com'],
//     }
// };
// In a Next.js project, the nextConfig object is used to configure various aspects of the application. The snippet you provided configures the images property to specify the external domains that are allowed 
// to host images used in your Next.js application.