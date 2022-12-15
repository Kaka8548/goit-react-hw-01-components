import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
