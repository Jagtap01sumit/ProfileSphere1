import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, phone, password } = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, phone, email, password: hashPassword });

    return NextResponse.json({ messesge: "user registered." }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        messesge: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
