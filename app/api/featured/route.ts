import { NextResponse } from "next/server";
import { getFeaturedSneakers } from "@/lib/actions/inventory.actions";

export const GET = async () => {
  try {
    const sneakers = await getFeaturedSneakers();
    if (!sneakers)
      return NextResponse.json(
        { error: "Could not get featured sneakers..." },
        { status: 404 }
      );
    return NextResponse.json({ sneakers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
