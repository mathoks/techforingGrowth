import { useQuery } from "@tanstack/react-query";
// import dynamic from "next/dynamic";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
console.log(baseUrl);


export const getProducts = async () => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-details-with-packages`;
    // console.log(endPoint)
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        // console.log('Fetched Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



export const getPriceSlider = async (dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-banner-content?category=Flash Banner Slider&${dynamicUrl}=${id}`;
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        // console.log('Fetched Data:', data)
        return data;
    }
    catch (error) {
        throw error;
    }
}


export const getPriceFaq = async (dynamicUrl,id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-faq/get?${dynamicUrl}=${id}`;
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export const getPricePurchase = async (dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-banner-content?category=Purchase Includes&${dynamicUrl}=${id}`;
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data)
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export const getMidCTA = async (dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-banner-content?category=Mid CTA&${dynamicUrl}=${id}`;
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data)
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export const getPromises = async (dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-banner-content?category=Special/On-Premises Section&${dynamicUrl}=${id}`;
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        // console.log('Fetched Data:', data)
        return data;
    }
    catch (error) {
        // console.error('Error fetching data:', error);
        throw error;
    }
}


export const getFooterCTA = async (dynamicUrl,id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-banner-content?category=Footer CTA&${dynamicUrl}=${id}`;
    const response = await fetch(endPoint);

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response}`);
    }

    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;
};



export const fetchPrice = async (paymentMethod, currency, dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-details-with-packages?payment_method=${paymentMethod}&payment_detail=${currency}&${dynamicUrl}=${id}`;
    console.log('API Endpoint:', endPoint);

    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const fetchFeatures = async (dynamicUrl, id) => {
    const endPoint = `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicUrl}=${id}`;
    console.log('API Endpoint:', endPoint);

    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const useFeaturesQuery = ({ dynamicUrl, id }) => {
    return useQuery({
        queryKey: ['feature', dynamicUrl, id],
        queryFn: () => fetchFeatures(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!dynamicUrl && !!id,
    });
};




export const usePriceQuery = ({ paymentMethod, currency, dynamicUrl, id }) => {
    return useQuery({
        queryKey: ['price', paymentMethod, currency, dynamicUrl, id],
        queryFn: () => fetchPrice(paymentMethod, currency, dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};

export const useFooterCTA = (dynamicUrl, id) => {
    return useQuery({
        queryKey: ['footerCTA', dynamicUrl, id],
        queryFn: () => getFooterCTA(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};

export const useHeroSlider = (dynamicUrl, id) => {
    return useQuery({
        queryKey: ['priceSlider', dynamicUrl, id],
        queryFn: () => getPriceSlider(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};

export const useGetPromises = (dynamicUrl, id) => {
    return useQuery({
        queryKey: ['promises', dynamicUrl, id],
        queryFn: () => getPromises(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};


export const useGetPricePurchase = (dynamicUrl, id) => {
    return useQuery({
        queryKey: ['pricePurchase', dynamicUrl, id],
        queryFn: () => getPricePurchase(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};

export const useGetPriceFaq = (dynamicUrl, id) => {
    return useQuery({
        queryKey: ['priceFaq', dynamicUrl, id],
        queryFn: () => getPriceFaq(dynamicUrl, id),
        staleTime: 60000,
        cacheTime: 300000,
        enabled: !!id,
    });
};