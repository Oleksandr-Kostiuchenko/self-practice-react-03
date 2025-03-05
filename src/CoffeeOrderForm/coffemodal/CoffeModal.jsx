import { createPortal } from "react-dom";
import style from "./CoffeModal.module.css";
import { CiCoffeeCup } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const CoffeModal = ({ coffeeData, isModalVisible, setIsModalVisible }) => {
  const onCloseBtnClick = (event) => {
    setIsModalVisible(false);
  };

  return createPortal(
    coffeeData.language === "en" ? (
      <div className={`${style.backdrop} ${style.isOpen}`}>
        <div className={style.modalWindow}>
          <button className={style.closeBtn} onClick={onCloseBtnClick}>
            <IoCloseSharp className={style.closeIcon} />
          </button>
          <h3 className={style.modalTitle}>Thanks for your order!</h3>
          <p className={style.modalText}>
            You ordered {coffeeData.size} {coffeeData.type}. <br /> We will take
            into account your comment: {coffeeData.comment}
          </p>

          <CiCoffeeCup className={style.CoffeeIcon} />
        </div>
      </div>
    ) : (
      <div className={`${style.backdrop} ${style.isOpen}`}>
        <div className={style.modalWindow}>
          <button className={style.closeBtn} onClick={onCloseBtnClick}>
            <IoCloseSharp className={style.closeIcon} />
          </button>
          <h3 className={style.modalTitle}>Дякую за ваше замовлення!</h3>
          <p className={style.modalText}>
            Ви замовили {coffeeData.size} {coffeeData.type}. <br /> Ми матимо на
            увазі Ваш коментар: {coffeeData.comment}
          </p>

          <CiCoffeeCup className={style.CoffeeIcon} />
        </div>
      </div>
    ),
    document.body
  );
};

export default CoffeModal;
