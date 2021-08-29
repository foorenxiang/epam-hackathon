// Referenced from https://heartbeat.fritz.ai/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button, StatusBar, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles/objectDetectionStyles';
import { fileExtensionFromString } from '../../../utils/generalUtils';
import handlePermissions from './permissions';
import AlbumPicker from './imagePicker';
import { isJPEG, invalidImageFormatAlert, convertImageToJpeg } from './imageConverter';
import useClassifier from './tfHooks';

const ObjectDetection = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { isTfReady, isModelReady, predictions, setClassifierImageInput } = useClassifier();
  const [selectedPrediction, setSelectedPrediction] = useState('');

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
      <TouchableOpacity
        onPress={() => navigation.navigate('RecycleForm')}
        style={{
          backgroundColor: '#FFF',
          width: '65%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 5,
          paddingBottom: 5,
          marginTop: 15,
          marginBottom: 15,
          borderRadius: 10,
        }}
        key={`${className}-touchable`}
      >
        <Text style={{ color: '#264257', fontSize: 24 }} key={`${className}-Text`}>
          {prediction}
        </Text>
      </TouchableOpacity>
    );
  };

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
        {image && (
          <Text style={styles.text}>
            {predictions ? 'Please select the device' : 'Identifying...'}
          </Text>
        )}
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
    </ScrollView>
  );
};

export default ObjectDetection;
