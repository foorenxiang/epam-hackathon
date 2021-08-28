// Referenced from https://heartbeat.fritz.ai/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from '../../../styles/objectDetectionStyles';
import { fileExtensionFromString } from '../../../utils/generalUtils';
import handlePermissions from './permissions';
import AlbumPicker from './imagePicker';
import { isJPEG, invalidImageFormatAlert, convertImageToJpeg } from './imageConverter';
import useClassifier from './tfHooks';
import RecycleForm from './RecycleForm';

const ObjectDetection = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { isTfReady, isModelReady, predictions, setClassifierImageInput } = useClassifier();
  const [selectedPrediction, setSelectedPrediction] = useState('Placeholder Prediction');

  // regular useEffect on component load
  useEffect(() => {
    (async () => {
      handlePermissions().catch((error) => console.log(error));
    })();
  }, []);

  // ensures classifyImage is executed only after setImage is completed to prevent race conditions
  useEffect(() => {
    (async () => {
      if (image) {
        setClassifierImageInput(image);
      }
    })();
  }, [image, setClassifierImageInput]);

  const selectImage = async () => {
    try {
      const { cancelled, uri = null } = await AlbumPicker();
      if (!cancelled) {
        const extensionOfURI = fileExtensionFromString(uri);

        if (isJPEG(extensionOfURI)) {
          setImage({ uri });
          return;
        }

        const convertedImageURI = await convertImageToJpeg(uri);
        if (convertedImageURI) {
          setImage({ uri: convertedImageURI });
          return;
        }

        invalidImageFormatAlert(extensionOfURI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPrediction = (predictionObjects) => {
    const { className } = predictionObjects;
    const prediction = className.split(',')[0];
    return (
      <Button
        key={prediction}
        title={prediction}
        onPress={() => setSelectedPrediction(prediction)}
        style={styles.text}
      />
    );
  };

  // const TextPad = () => <View style={{ flex: 1 }}></View>;

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={isModelReady ? selectImage : undefined}
      >
        {image && <Image source={image} style={styles.imageContainer} />}
        {!image && (
          <Text style={styles.transparentText}>
            {isModelReady ? 'Tap to recognise!' : 'Loading object recognizer...'}
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.predictionWrapper}>
        {image && !predictions && <Text style={styles.text}>Identifying...</Text>}
        {!!image &&
          predictions &&
          !selectedPrediction &&
          predictions.map((p) => renderPrediction(p))}
        {!!selectedPrediction && <Text style={styles.text}>{selectedPrediction}</Text>}
        {!!selectedPrediction && (
          <Button
            title="Retry Scan"
            onPress={() => {
              setSelectedPrediction('');
              setImage(null);
            }}
          />
        )}
      </View>
      <View style={styles.formikContainer}>
        {!!selectedPrediction && <RecycleForm navigation={navigation} />}
      </View>
      {/* <TextPad /> */}
    </ScrollView>
  );
};

export default ObjectDetection;
