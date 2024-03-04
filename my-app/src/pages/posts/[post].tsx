import Post from "@/types/post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// ISSUE: KEEPS SENDING API REQUESTS AFTER THE FIRST ONE

export default function Page() {
  const router = useRouter();
  const post = router.query.post;
  const [p, updateP] = useState<Post>({ id: null, title: "", content: "" });

  useEffect(() => {
    if (post) {
      fetch("/api/getPost?post=" + post)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data: void | Post) => {
          console.log(data);
          updateP(data as Post);
        });
    }
  }, [post]);

  return (
    <>
      <h1>{p.title}</h1>
      <div>{p.content}</div>
    </>
  );
}
