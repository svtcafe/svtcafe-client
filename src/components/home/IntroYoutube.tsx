import styled from '@emotion/styled';
import YouTube from 'react-youtube';

interface IntroYoutube {
  videoId: string;
  className?: string;
}

const IntroYoutube: React.FC<IntroYoutube> = ({ videoId, className }) => {
  return <YoutubeVideo className={className} videoId={videoId} />;
};

export default IntroYoutube;

const YoutubeVideo = styled(YouTube)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
