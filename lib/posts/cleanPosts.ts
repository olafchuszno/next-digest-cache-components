'use server'

import { updateTag } from "next/cache"
import { cleanDB } from "./db/cleanDB"

export const cleanPosts = async () => {
  cleanDB()
  updateTag('posts')
}