import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    // 1️⃣ Validate input
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // 2️⃣ Connect to DB
    await connect();

    // 3️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 409 }
      );
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // 6️⃣ Success response
    return new Response(
      JSON.stringify({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTER_ERROR]", error);

    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};
