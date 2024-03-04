import Post from "@/types/post";
import blogPost from "@/ui/blogPost";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/getposts")
      .then((res) => res.json())
      .then((data): void => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div className="container mr-1">
      {posts.map((post) => {
        return blogPost(post);
      })}
    </div>
  );
}
