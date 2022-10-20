import { Dispatch, SetStateAction } from "react";
import { createContext, useState, useContext } from "react";
import { PostType } from "../types";

type PostContextType = {
  selectedPost: PostType | null;
  setSelectedPost: Dispatch<SetStateAction<PostType | null>>;
};

const PostContext = createContext<PostContextType | null>(null);

type PostProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function PostProvider({ children }: PostProviderProps) {
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const postContext = useContext(PostContext);

  if (!postContext) {
    throw new Error("You need to use PostContext within an PostProvider!");
  }

  return postContext;
}
