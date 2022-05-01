import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './Transactions.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
