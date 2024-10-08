// products

import { NextRequest, NextResponse } from "next/server";
import { getProductsForCustomers } from "@/lib/actions/inventory.actions";

export const GET = async () => {
  try {
    const products = await getProductsForCustomers();
    if (!products) {
      return NextResponse.json(
        { error: "No products found..." },
        { status: 404 }
      );
    }
    return NextResponse.json({ products });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
