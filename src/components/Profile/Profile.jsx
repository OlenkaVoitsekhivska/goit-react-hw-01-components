import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile ({ avatar, username, tag, location, stats}) {
    return <div className={styles.profile}>
            <div className={styles.description}>
            <img src={avatar} alt="" className={ styles.avatar} />
            <p className={ styles.name}>{username}</p>
            <p className={ styles.tag}>@{tag}</p>
            <p className={ styles.location}>{location}</p>
            </div>
        <ul className={styles.stats}>
            <li className = { styles.statsItem}>
                  <span className="label">Followers</span>
                <span className={ styles.quantity}>{stats.followers}</span>
                </li>
                <li className = { styles.statsItem}>
                  <span className="label">Views</span>
                      <span className={ styles.quantity}>{stats.views}</span>
                </li>
                <li className = { styles.statsItem}>
                  <span className="label">Likes</span>
                      <span className={ styles.quantity}>{stats.likes}</span>
                </li>
              </ul>

           
        </div>

}
Profile.propTypes = {
    avatar:PropTypes.string,
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    stats:PropTypes.objectOf(PropTypes.number),
}
export default Profile;


