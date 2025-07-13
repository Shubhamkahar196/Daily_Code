

import express, { Request, Response, NextFunction } from "express";
import { ContentModel } from "../Models/contentModels";
import { z } from "zod";

interface AuthRequest extends Request {
  userID?: string;
}

const contentSchema = z.object({
  link: z.string(),
  contentType: z.string(),
  title: z.string(),
  tag: z.string(),
});

export const newContent = async (req: AuthRequest, res: Response) => {
  try {
    const parseDataSuccess = contentSchema.safeParse(req.body);
    if (!parseDataSuccess.success) {
      res.status(400).json({
        message: "Invalid request data",
        error: parseDataSuccess.error,
      });
      return;
    }

    const { link, contentType, title, tag } = req.body;
    const userid = req.userID;
    if (!link || !contentType || !title || !userid) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const contentCreated = new ContentModel({
      link,
      contentType,
      title,
      tag,
      userId: userid,
    });
    await contentCreated.save();
    res.status(201).json({ message: "Content saved successfully" });
  } catch (err) {
    console.log("Err(catch): something went wrong", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const content = async (req: AuthRequest, res: Response) => {
  try {
    const userid = req.userID;
    if (!userid) {
      res.status(400).json({ message: "Something went wrong" });
      return;
    }

    const userData = await ContentModel.find({ userId: userid });
    res.status(200).json({
      message: "User data fetched successfully",
      data: userData,
    });
  } catch (err) {
    console.log("Err(catch): something went wrong", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteContent = async (req: AuthRequest, res: Response) => {
  try {
    const userid = req.userID;
    const contentId = req.params.contentId;
    if (!userid || !contentId) {
      res.status(400).json({ message: "User ID or Content ID missing" });
      return;
    }

    const content = await ContentModel.findOneAndDelete({
      _id: contentId,
      userId: userid,
    });
    if (!content) {
      res.status(404).json({ message: "Content not found or unauthorized" });
      return;
    }

    res.status(200).json({ message: "Content deleted successfully" });
  } catch (err) {
    console.log("Err(catch): something went wrong", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const shareContent = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    const documents = await ContentModel.find({ userId });
    res.status(200).json({ data: documents });
  } catch (err) {
    console.log("Err(catch): something went wrong", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


