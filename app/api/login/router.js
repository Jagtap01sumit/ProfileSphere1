// import connect from "../../../lib/mongodb";
// import { NextResponse } from "next/server";
// import User from "../../../models/user";

// export default async function handler(req, res) {
//   try {
//     await connect();
//     console.log("hello3");
//     const { email, password } = req.body;
//     const user = await User.findOne({ email, password });
//     return NextResponse(user);
  
//   } catch (error) {
//     console.error("An error occurred:", error);
//     return res.status(500).json({ error: "An error occurred" });
//   }
// }
