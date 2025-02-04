"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addChallenge, startChallenge, completeChallenge } from "@/store/slices/challengeSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Example: Adding some challenges to different states
    const challenge1 = { id: "1", title: "Challenge 1", description: "Description of challenge 1" };
    const challenge2 = { id: "2", title: "Challenge 2", description: "Description of challenge 2" };
    const challenge3 = { id: "3", title: "Challenge 3", description: "Description of challenge 3" };

    // Add challenges to the open state
    dispatch(addChallenge(challenge1));
    dispatch(addChallenge(challenge2));

    // Move Challenge 1 to ongoing
    dispatch(startChallenge("1"));

    // Move Challenge 2 to completed
    dispatch(completeChallenge("2"));

    // Redirect to landing page
    router.replace("/landing");
  }, [dispatch, router]);

  return null;
}
