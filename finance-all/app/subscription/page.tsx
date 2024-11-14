import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const SubscriptionsPage = async () => {
  // Acessar as transações do banco de dados
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
    </>
  );
};

export default SubscriptionsPage;
