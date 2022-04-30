
import styles from './Transactions.module.css';

function TableRow({id, type, amount, currency}) {
    return <tr key={id} className = {styles.table__row}>
        <td>{ type}</td>
        <td>{ amount}</td>
        <td>{ currency}</td>
    </tr>
}

function TransactionHistory({items}) {
    return <table className={styles.table}>
  <thead className={styles.table__head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(({id,type, amount, currency}) => {
               return <TableRow
                 key={id}
                 type={type}
                 amount={amount}
                 currency={ currency}
                />
            })}
  </tbody>
</table>
}

export default TransactionHistory;