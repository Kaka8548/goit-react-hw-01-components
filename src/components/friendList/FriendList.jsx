import { List, Item, Status, Avatar, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
