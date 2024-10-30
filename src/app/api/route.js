// const baseURL = "http://127.0.0.1:8000/api/v1";
const baseURL = "https://cmsadmin.techforing.com/api/v1";

const getCategoryData = async (params, siteName) => {
    const endPoint = `${baseURL}/blog/post/categorywise/views/?category=${params}&posted_site=${siteName}`
    //const response = await fetch(endPoint, { next: { revalidate: 1 } }, {cache: 'no-store'});
    const response = await fetch(endPoint,{ next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}
export {
    getCategoryData,
};
