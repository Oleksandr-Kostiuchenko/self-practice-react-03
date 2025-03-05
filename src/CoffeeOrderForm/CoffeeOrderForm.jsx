import { useState, useEffect, useId } from "react";
import style from "./CoffeeOrderForm.module.css";

import CoffeModal from "./coffemodal/CoffeModal";

const CoffeeOrderForm = () => {
  const formId = useId();

  const [coffeeData, setCoffeeData] = useState({
    language: "en",
    size: "small",
    type: "espresso",
    comment: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFormChange = (event) => {
    setCoffeeData({
      ...coffeeData,
      [event.target.name]: event.target.value,
    });

    console.log(coffeeData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
    event.target.reset();
  };

  return (
    <>
      {coffeeData.language === "en" ? (
        <>
          <h2>Order a coffee</h2>
          <form onChange={onFormChange} onSubmit={onFormSubmit} action="">
            <div className="coffee-selector-wrapper">
              <label htmlFor={`${formId}-language`}>Choose Language:</label>
              <select name="language" id={`${formId}-language`} required>
                <option value="en" name="language">
                  EN
                </option>
                <option value="ua" name="language">
                  UA
                </option>
              </select>
            </div>

            <div className="size-selector-wrapper">
              <label>Choose size:</label>
              <div>
                <input
                  type="radio"
                  id={`${formId}-small`}
                  name="size"
                  value="small"
                  required
                />
                <label htmlFor={`${formId}-small`}>Small</label>
              </div>

              <div>
                <input
                  type="radio"
                  id={`${formId}-medium`}
                  name="size"
                  value="medium"
                  required
                />
                <label htmlFor={`${formId}-medium`}>Medium</label>
              </div>

              <div>
                <input
                  type="radio"
                  id={`${formId}-large`}
                  name="size"
                  value="large"
                  required
                />
                <label htmlFor={`${formId}-large`}>Large</label>
              </div>
            </div>

            <div className="type-coffee-selector">
              <label htmlFor={`${formId}-type`}>Coffee type:</label>
              <select name="type" id={`${formId}-type`} required>
                <option value="espresso">Espresso</option>
                <option value="latte">Latte</option>
                <option value="capuccino">Capuccino</option>
              </select>
            </div>

            <div className="comment-wrapper">
              <label htmlFor={`${formId}-comment`}>Add comment:</label>
              <textarea
                name="comment"
                id={`${formId}-comment`}
                required
              ></textarea>
            </div>

            <button type="submit">Order</button>
          </form>
        </>
      ) : (
        <>
          <h2>Замовте кофе</h2>
          <form onChange={onFormChange} onSubmit={onFormSubmit} action="">
            <div className="coffee-selector-wrapper">
              <label htmlFor={`${formId}-language`}>Виберіть мову:</label>
              <select name="language" id={`${formId}-language`} required>
                <option value="en" name="language">
                  EN
                </option>
                <option value="ua" name="language">
                  UA
                </option>
              </select>
            </div>

            <div className="size-selector-wrapper">
              <label>Розмір:</label>
              <div>
                <input
                  type="radio"
                  id={`${formId}-small`}
                  name="size"
                  value="small"
                  required
                />
                <label htmlFor={`${formId}-small`}>Маленький</label>
              </div>

              <div>
                <input
                  type="radio"
                  id={`${formId}-medium`}
                  name="size"
                  value="medium"
                  required
                />
                <label htmlFor={`${formId}-medium`}>Середній</label>
              </div>

              <div>
                <input
                  type="radio"
                  id={`${formId}-large`}
                  name="size"
                  value="large"
                  required
                />
                <label htmlFor={`${formId}-large`}>Великий</label>
              </div>
            </div>

            <div className="type-coffee-selector">
              <label htmlFor={`${formId}-type`}>Тип кофе:</label>
              <select name="type" id={`${formId}-type`} required>
                <option value="espresso">Еспрессо</option>
                <option value="latte">Латте</option>
                <option value="capuccino">Капучино</option>
              </select>
            </div>

            <div className="comment-wrapper">
              <label htmlFor={`${formId}-comment`}>Коментар:</label>
              <textarea
                name="comment"
                id={`${formId}-comment`}
                required
              ></textarea>
            </div>

            <button type="submit">Замовити</button>
          </form>
        </>
      )}
      {isModalVisible && (
        <CoffeModal
          coffeeData={coffeeData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default CoffeeOrderForm;
