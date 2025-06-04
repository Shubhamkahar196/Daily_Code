import conf from "../conf/conf";

import {Client, Account, ID } from "appwrite"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
           .setEndpoint(conf. appwriteUrl)
           .setProject(conf.appwriteProjectId)

           this.account = new Account(this.client);
           
    }
  
   
    // create Account

    async createAccount({email,password,name}){
        try {
        const userAccount = await this.account.create(ID.unique(),email,password,name);
        if(userAccount){
            // return userAccount;
            //call another method
              return this.login({email,password})

        }else{
            return  userAccount;
        }
        }catch(error){
            throw error;
        }
    }


    //login

    async login({email,password}){
        try{
        return  await this.account.client.createEmailSession(email,password);
        }catch(error){
            throw error;
        }
    }


    // getCurrentUser

    async getCurrentUser(){
        try{
             return await this.account.get();
        }catch(error){
            throw error;
        }

        return null;
    }

   // logout
   
    async logout(){
        try{
            await this.account.deleteSession();
        }catch(error){
            throw error;
        }
    }
}


const authService = new AuthService()

export default authService