import { json } from "react-router-dom";
import { HOST_API_SERVER_1 } from ".";

export const getPageMat = async () => {

    const res = await fetch(`${HOST_API_SERVER_1}/print-barcode/paginated`)
    if (!res.ok) throw new Error('Failed to fetch data');

    const parsedUMatInfo = res.json();
    return parsedUMatInfo || null;
}