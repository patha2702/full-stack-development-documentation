"use server"
import client from "../../db";
import { NextRequest } from "next/server";

export async function signup(username: string, password: string) {
  try {
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
}

