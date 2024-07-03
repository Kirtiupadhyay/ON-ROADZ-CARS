import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { SocialContainer, SocialLink } from './SocialLinks.styled';

export default function SocialLinks() {
  return (
    <SocialContainer>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </SocialLink>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </SocialLink>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </SocialLink>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </SocialLink>
    </SocialContainer>
  );
}
