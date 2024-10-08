import { NextResponse } from "next/server";
import { deleteSneaker, getSneaker } from "@/lib/actions/sneaker.actions";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params; // Extract 'id' from the URL parameters
    const sneaker = await getSneaker(id);

    if (!sneaker) {
      return NextResponse.json(
        { error: "Sneaker not found..." },
        { status: 404 }
      );
    }

    return NextResponse.json({ sneaker }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (
  request: Request,
  { params }: { params: { id: string } }
) => {};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const sneaker = await deleteSneaker(id);

    if (!sneaker) {
      return NextResponse.json(
        { error: "Sneaker not found to delete..." },
        { status: 404 }
      );
    }

    return NextResponse.json({ sneaker }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
