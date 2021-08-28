import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    backgroundColor: '#2DB9A3',
    alignItems: 'center',
  },
  loadingContainer: {
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
    marginTop: 5,
  },
  imageWrapper: {
    width: 250,
    height: 250,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 5,
    borderStyle: 'solid',
    marginTop: 15,
    marginBottom: 15,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageContainer: {
    width: 250,
    height: 250,
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
    opacity: 0.9,
    fontSize: 20,
  },
  footer: {
    marginTop: 40,
  },
  formikContainer: { flex: 1 },
});
