import { createPost } from '@/lib/posts/createPost';

export default async function Page() {
  return (
    <main className="server-border">
      <h1>Create Post</h1>
      <form action={createPost}>
        <div>
          <label className='block' htmlFor="title">Title</label>
          <input
            className="server-border"
            id="title"
            name="title"
            type="text"
            required
          />
        </div>
        <div>
          <label className='block' htmlFor="body">Body</label>
          <textarea className="server-border" id="body" name="body" required />
        </div>
        <button className="server-border server-text" type="submit">
          Create Post
        </button>
      </form>
    </main>
  );
}
