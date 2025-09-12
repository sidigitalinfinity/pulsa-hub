import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { Deals } from "@/components/home/Deals";
import { Features } from "@/components/home/Features";
import { OrderTracker } from "@/components/home/OrderTracker";
import { ResellerCTA } from "@/components/home/ResellerCTA";

export default function Index() {
  const [_, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching demo:", error);
    }
  };

  return (
    <>
      <Hero />
      <Categories />
      <Deals />
      <OrderTracker />
      <Features />
      <ResellerCTA />
    </>
  );
}
