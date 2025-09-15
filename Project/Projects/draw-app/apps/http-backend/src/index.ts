import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateUserSchema,
  signinSchema,
  CreateRoomSchema,
} from "@repo/common/types";

import { prismaClient } from "@repo/db/client";
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data?.email,
        // TODO: Hash the pw
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists with this username",
    });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const parseData = signinSchema.safeParse(req.body);
    if (!parseData.success) {
      res.json({
        message: "Incorrect Inputs",
      });
      return;
    }

    // Todo : compare the hashed pws here

    const user = await prismaClient.user.findFirst({
      where: {
        email: parseData.data.email,
        password: parseData.data.password,
      },
    });

    if (!user) {
      return res.json({
        message: "Not authorized",
      });
      return;
    }

    const token = jwt.sign(
      {
        userId: user?.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } catch (error) {
    res.json({
      message: "Incorrect inputs",
    });
  }
});

app.post("/room", middleware, async (req, res) => {
  const parseData = CreateRoomSchema.safeParse(req.body);

  if (!parseData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  // @ts-ignore
  const userId = req.userId;

  try {
    const room = await prismaClient.room.create({
      data: {
        slug: parseData.data.name,
        adminId: userId,
      },
    });
    res.json({
      roomId: room.id,
    });
  } catch (error) {
    res.status(411).json({
      message: "Room already exists with this name",
    });
  }
  // db call

  // res.json({
  //   roomId:room.id
  // });
});

app.get("/chats/:roomId", async (req, res) => {
  try {
    const roomId = Number(req.params.roomId);
    const message = await prismaClient.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });
    res.json({
      message,
    });
  } catch (error) {
    res.json({
      message: "Error from backend"
    })
  }
});

app.get("/room/:slug", async (req, res) => {
  const slug = req.params.slug;
  const room = await prismaClient.room.findFirst({
    where: {
      slug,
    },
  });
  res.json({
    room,
  });
});

app.listen(3001, () => {
  console.log("Server ismrunning on 3001 of http-backend");
});
