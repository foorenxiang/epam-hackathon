import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2DB9A3',
    alignItems: 'center',
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
  get textWithBottomMargin() {
    return {
      ...this.text,
      marginBottom: '5%',
    };
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imageWrapper: {
    width: 350,
    height: 350,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 5,
    borderStyle: 'solid',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageContainer: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    borderRadius: 20,
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7,
  },
  footer: {
    marginTop: 40,
  },
});
