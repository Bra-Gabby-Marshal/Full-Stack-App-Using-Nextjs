import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = await params; // <-- await params here

  try {
    await connect();

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params; // <-- await params here

  try {
    await connect();

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
