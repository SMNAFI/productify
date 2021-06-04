import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import Modal from 'react-native-modal';


const CarItem = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const { name, tagline, taglineCTA, image, price, dimensions, horsepower, range, weight } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {price}
                </Text>
            </View>


            <View style={{ flex: 1, }, styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"More Info"}
                    onPress={toggleModal}
                />

                <Modal isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}>
                    <View>
                        <Text style={styles.modalText}>{name}</Text>
                        <Text style={styles.modalText}>{range}</Text>
                        <Text style={styles.modalText}>{horsepower}</Text>
                        <Text style={styles.modalText}>{dimensions}</Text>
                        <Text style={styles.modalText}>{weight}</Text>
                        <Text style={styles.modalText}>Price: {price}</Text>
                    </View>
                </Modal>
            </View>

        </View>
    );
};

export default CarItem;
