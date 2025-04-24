import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import { SearchForm } from "./components/SearchForm";
import {
  TransactionsContainer,
  TransactionsTable,
  TransactionCard,
  CardList,
  PriceHighlight
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Trash } from "phosphor-react";

export function Dashboard() {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {/* Tabela Desktop */}
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                  <td>
                    <Trash
                      size={24}
                      color={"#F75A68"}
                      onClick={() => deleteTransaction(transaction.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>

        {/* Lista Mobile */}
        <CardList>
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id}>
              <div className="contentCard">
                <div>
                  <div className="description">{transaction.description}</div>
                  <div className={`price ${transaction.type}`}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </div>

                </div>
                <Trash
                  size={24}
                  color={"#F75A68"}
                  onClick={() => deleteTransaction(transaction.id)}
                />
              </div>
              <footer>
                <span>{transaction.category}</span>
                <span>{dateFormatter.format(new Date(transaction.createdAt))}</span>
              </footer>
            </TransactionCard>
          ))}
        </CardList>
      </TransactionsContainer>
    </div>
  );
}
