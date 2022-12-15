import {
  Table,
  TableHead,
  TableTr,
  TableBody,
  Th,
  Td,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <TableTr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TableTr>
      </TableHead>

      <TableBody>
        {transactions.map(transaction => (
          <TableTr key={transaction.id}>
            <Td>{transaction.type}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
          </TableTr>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
