import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Button } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
import s from "./ToDo.style";

import AntDesign from "@expo/vector-icons/AntDesign";

import useTodos from "../hooks/useToDos";

export default function ToDo({
  item,
  onDelete,
  handleCheckBox,
  handleunCheckBox,
  doneItems,
  setModalOpen,
}) {
  const { isChecked, modalOpen, onCheckBoxClick, handleDelete } = useTodos(
    item,
    handleCheckBox,
    setModalOpen
  );

  const modaltest = () => {
    return (
      <>
        <Modal visible={modalOpen} style={s.modal}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello Modal</Text>
        </Modal>

        <MaterialIcons
          name="add"
          size={24}
          onPress={() => setModalOpen(true)}
        />
      </>
    );
  };

  return (
    <View style={s.todo}>
      <Checkbox
        style={s.checkbox}
        value={isChecked}
        onValueChange={onCheckBoxClick}
      />
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text>{item.text}</Text>
      </TouchableOpacity>

      <Modal visible={modalOpen} animationType="slide">
        <View style={s.modal}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <Text style={s.modalText}>{item.text}</Text>
        </View>
      </Modal>

      <TouchableOpacity onPress={handleDelete}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
