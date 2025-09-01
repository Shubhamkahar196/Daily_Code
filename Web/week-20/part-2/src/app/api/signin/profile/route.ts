import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

// bad approach

// export function GET(req:NextRequest){
//     const headers = req.headers;
//     const authorization = hearders['authorization'];
//     const decoded = jwt.decode(authorization,"SECRET")
//     const userId = decoded.userId;

//     // get db to userid


//     return NextResponse.json({
//         avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8q8q8q8a9a9w7_free-dog-google-search-dog-clipart%2F&psig=AOvVaw1tCDmbL6kWsOvoWykwt7Mb&ust=1756786841246000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCG847bto8DFQAAAAAdAAAAABAE"
//     })
// }

// good approach
export function GET(req:NextRequest){
    
 return NextResponse.json({
        avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8q8q8q8a9a9w7_free-dog-google-search-dog-clipart%2F&psig=AOvVaw1tCDmbL6kWsOvoWykwt7Mb&ust=1756786841246000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCG847bto8DFQAAAAAdAAAAABAE"
    })

    
}


