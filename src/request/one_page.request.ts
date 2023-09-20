import { http } from "./https";

export const getText = () => http.get("/?c=i");
export const getOtherText = ()=>http.get('/?c=j')