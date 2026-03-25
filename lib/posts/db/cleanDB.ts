import { POSTS_DB } from "./_postsDB"


export const cleanDB = async () => {
  POSTS_DB.splice(3)
}