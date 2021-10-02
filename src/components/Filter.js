import React, { useContext } from "react";
import Context from "../context/Context";
import { StyleSheet, Text, View, Modal } from "react-native";

const Filter = () => {
  const { showModal } = useContext(Context);

  return (
    <Modal visible={false}>
      <View>
        <Text></Text>
      </View>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({});
