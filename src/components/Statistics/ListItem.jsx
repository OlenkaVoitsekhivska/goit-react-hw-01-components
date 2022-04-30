import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateColor() {
  console.log('#' + Math.floor(Math.random() * 16777215).toString(16));
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function ListItem({ label, percentage }) {
  return (
    <li className={styles.item} style={{ background: generateColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}
ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default ListItem;
