import { NextResponse } from "next/server";
import { getSneakers } from "@/lib/actions/sneaker.actions";

export const GET = async () => {
  try {
    const sneakers = await getSneakers();
    if (!sneakers)
      return NextResponse.json(
        { error: "Could not get sneakers..." },
        { status: 404 }
      );
    return NextResponse.json({ sneakers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
