import PropTypes from 'prop-types';
import styles from './FriendList.module.css';



function FriendListItem({id,avatar,name,isOnline}) {
  return <li className={ styles.item} key={id}>
    <span className={isOnline?styles.isOnline:styles.isOffline}>{ isOnline}</span>
    <img className={ styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={ styles.name}>{ name}</p>
        </li>
}

function FriendList({friends}) {
  return <ul className={ styles.list}>
      {friends.map(({id,avatar,name,isOnline}) => {
        return <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        
          />
      })}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;