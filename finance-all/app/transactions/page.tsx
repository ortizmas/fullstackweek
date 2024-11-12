import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
const TransactionsPage = async () => {
    // Acessar as transações do banco de dados
    const transactions = await db.transaction.findMany({});
    console.log(transactions);
    return (
        <div className="p-6 space-y-6">
            <div  className="flex w-full items-center justify-between">
                <h1 className="text-2xl font-bold">Transação</h1>
                <Button className="rounded-full">
                    Adicinar transação
                    <ArrowDownUpIcon />
                </Button>
            </div>
            <DataTable columns={transactionColumns} data={transactions} />
        </div>
        
    );
};

export default TransactionsPage;