// products / id

import { NextResponse } from "next/server";
import {
  getProductDetail,
  updateInventoryItemVisibility,
} from "@/lib/actions/inventory.actions";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const productDetail = await getProductDetail(id);
    if (!productDetail) {
      return NextResponse.json(
        { error: `Could not get details for product: ${id}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ productDetail });
  } catch (err) {
    return NextResponse.json(
      { error: `Could not get product details` },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const reqBody = await req.json();
    const { visible } = reqBody;
    const isVisible = visible === "true"; // changes it to boolean
    const addProduct = await updateInventoryItemVisibility(id, isVisible);
    if (!addProduct) {
      return NextResponse.json(
        { error: `Could not add to inventory: ${id}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ addProduct });
  } catch (err) {
    return NextResponse.json({ error: `sneaker not found` }, { status: 500 });
  }
};
