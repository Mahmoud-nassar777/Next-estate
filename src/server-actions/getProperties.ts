import axios from "axios";
import { Property } from "@/types/property";

export interface GetPropertiesParams {
    search?: string;
    propertyType?: string;
    location?: string;
    address?: string;
    minPrice?: number;
    maxPrice?: number;
}

export async function getProperties(
    params?: GetPropertiesParams
): Promise<Property[]> {
    try {
        const { data } = await axios.get<Property[]>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`,
            {
                params: {
                    search: params?.search,
                    propertyType: params?.propertyType,
                    location: params?.location,
                    address: params?.address,
                    minPrice: params?.minPrice,
                    maxPrice: params?.maxPrice,
                },
            }
        );

        return data;
    } catch (error) {
        console.error("Get properties error:", error);
        throw new Error("Failed to fetch properties");
    }
}