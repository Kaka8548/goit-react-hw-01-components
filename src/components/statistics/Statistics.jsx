import css from './Statistics.module.css';
import { createRandomColor } from '../../utils';
import PropTypes from 'prop-types';

export default function Statistics({ title = null, stats }) {
  return (
    <div className={css.statisticsWrapper}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={css.item}
              style={{
                backgroundColor: createRandomColor(),
              }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
