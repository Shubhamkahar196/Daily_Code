"use client"
import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from ".prisma/client";

// import { PrismaClient } from '../src/generated/prisma/client.js';
// import { PrismaClient } from '../../prisma/client';



//  const prismaClient = new PrismaClient();

import prismaClient from "../../../lib/db"

export async function POST( req:NextRequest){
   
   

    const data = await req.json();

    prismaClient.user.create({

    })

    console.log(data);
       
    prismaClient.user.create({
        data:{
            username: data.username,
            password: data.password
        }
    })


    return NextResponse.json({
        message: "You have been signed up"
    })
}