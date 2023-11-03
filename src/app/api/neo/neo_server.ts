import { getUrlParam } from "@/services/server/getUrlParam";
import { res, toServerError } from "@/services/server/res";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const startDate = getUrlParam(request, "startDate", true);
    const endDate = getUrlParam(request, "endDate", true);

    const result = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=false&api_key=${process.env.API_KEY}`)

    const data = await result.json();

    return res({ data });
  } catch (error) {
    return res({ error: toServerError(error) });
  }
}
