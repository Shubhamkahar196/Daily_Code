import { NextResponse } from "next/server";




export function GET(){
     
    return NextResponse.json({
        user: "shubham",
        email: "shubham@gmail.com"
    })
}


export function POST(){
    return NextResponse.json({
        user: "Shubham",
        email: "shubham@gmail.com"
    })
}
export function PUT(){
    return NextResponse.json({
        user: "Shubham update",
        email: "shubham@gmail.com"
    })
}
export function DELETE(){
    return NextResponse.json({
        user: "Shubham Delete",
        email: "shubham@gmail.com"
    })
}