import { Linking } from 'react-native';

const openVidLink = async (vidLink) => {
  const supported = await Linking.canOpenURL(vidLink);
  if (supported) {
    Linking.openURL(vidLink);
  }
};

export default openVidLink;
