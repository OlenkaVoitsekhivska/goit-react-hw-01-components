import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateColor() {
        console.log("#" + Math.floor(Math.random() * 16777215).toString(16));
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
        
}
function ListItem({ id,label,percentage}) {
        return <li className={styles.item} key={id} style={{ background: generateColor() }}>
            <span className={styles.label}>{label}</span>
                <span className={ styles.percentage}>{percentage}%</span>
            </li>
}

function Statistics({title,stats}) {
        return <section className={ styles.statistics}>
                {title && <h2 className={ styles.title}>Upload stats</h2>}

                <ul className={ styles.list}>
   {stats.map(el => {
           return <ListItem
                   key={el.id}
                   label={el.label}
                   percentage={el.percentage}
                   
                        
           />
        })}
        </ul>
</section>
  
}
Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.object)
}

export default Statistics;