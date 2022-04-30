import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import user  from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';


export const App = () => {
  return (
  <>
    <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
          stats={user.stats}
    />
    <Statistics
        title="Upload stats"
        stats={data}    
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
  );
};
