import { ProfileBtn, ProfileImg } from '../../styles/components/navbar';

const ProfileButton = () => {
  return (
    <ProfileBtn>
      <ProfileImg src='/profile.svg' alt='profile button' />
    </ProfileBtn>
  );
}

export default ProfileButton;