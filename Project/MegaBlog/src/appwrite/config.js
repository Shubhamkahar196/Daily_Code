import conf from "../conf/conf";

import {Client, Databases,Storage,Query, ID } from "appwrite"


export class Service{
    client = new Client(),
    databases;
    bucket;

    constructor(){
        this.client
    }
}

 




const service = new Service();
export default service