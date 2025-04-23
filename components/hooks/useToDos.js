import React, { useState } from "react";

export default function useTodos(item, handleCheckBox) {
  const [isChecked, setChecked] = useState(item.completed);
  const [modalOpen, setModalOpen] = useState(false);

  const onCheckBoxClick = () => {
    console.log(" Current check box status  was checked?? ", isChecked);

    if (isChecked) {
      console.log(" Check", isChecked);
      handleunCheckBox(item.key);
      setChecked(false);
    }
    console.log(item.key, " unCheck", isChecked); //doneItems(item);
    handleCheckBox(item.key);
    setChecked(true);
  };

  const handleDelete = () => {
    onDelete(item.key);
  };

  return {
    isChecked,
    modalOpen,
    onCheckBoxClick,
    handleDelete,
    setModalOpen,
  };
}
