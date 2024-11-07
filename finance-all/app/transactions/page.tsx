import { db } from "../_lib/prisma";
const TransactionsPage = async () => {
    // Acessar as transações do banco de dados
    const transactions = await db.transaction.findMany({});
    console.log(transactions);
    return (
        <div  className="flex items-center justify-center w-screen">
            {transactions.map((transaction) => (
                <div key={transaction.id}>{transaction.name}</div>
            ))}
        </div>
    );
};

export default TransactionsPage;