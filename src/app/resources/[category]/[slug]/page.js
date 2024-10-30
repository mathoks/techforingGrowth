import SinglePostView from "@/components/BlogPostContainer/SinglePostView";

const baseURL = "https://cmsadmin.techforing.com/api/v1";
const siteURL = process.env.SITEURL; 

// Function to get single post by post url
async function getSinglePost(url) {
    const res = await fetch(`${baseURL}/blog/posts/views/with/tableofcontent/${url}`,
        { next: { revalidate: 100 } },
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch the post data");
    }
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    console.log(params);
    const post = await getSinglePost(slug);
    
    const canonicalURL = post?.schema_data?.url 
        ? `${siteURL}/${post.schema_data.url}`
        : `${siteURL}/resources/${params?.category}/${slug}`;

    return {
        title: post?.schema_data?.headline || "Blog Post",
        description: post?.schema_data?.description || "Read our latest blog post",
        keywords: post?.schema_data?.keywords || "",
        openGraph: {
            title: post?.schema_data?.headline || "Blog Post",
            description: post?.schema_data?.description || "Read our latest blog post",
            url: canonicalURL,
            type: 'article',
        },
        alternates: {
            canonical: canonicalURL,
        },
    };
}

const PostPage = async ({ params }) => {
    const { slug } = params;
    const post = await getSinglePost(slug);
    return (
        <div>
            <SinglePostView viewBlogPost={post} />
        </div>
    );
};

export default PostPage;