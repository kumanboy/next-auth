import {NextResponse} from "next/server";
import connectDB from "@/config/db";
import User from "@/model/User";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
    const {username, email, password, confirmPassword} = await request.json()
    console.log(password)
    console.log(confirmPassword)

    if (password !== confirmPassword) {
        return new NextResponse(JSON.stringify({error: "Password do not mathc"}, {status: 400}))
    }
    await connectDB()
    const exitingUser = await User.findOne({email})
    if (exitingUser) {
        return new NextResponse(JSON.stringify({error: "User already exists"}, {status: 409}))
    }

//     codeni hashlash
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({username,email, password: hashedPassword})

    try {
        await newUser.save()
        return new NextResponse('User Successfully created', {status: 201})
    }
    catch (error) {
        return new NextResponse(error, {status: 500})
    }
}
