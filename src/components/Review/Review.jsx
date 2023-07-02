import React, { useState } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { UserContainer } from "@/containers/UserContainer";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { MenuSkeleton } from "../Menu/MenuSkeleton";

export const Review = ({ review, className, user, users, restaurantId, isFetching }) => {
  const [change, setChange] = useState(true) // показываю/скрываю форму редактировния

  useEffect(() => { // убирать открытую форму при смене ресторана
    setChange(true)
  }, [restaurantId])

  if (!review) {
    return null;
  }

  if (isFetching) { // убирает прогрузку при изменении комента
    return <MenuSkeleton />;
  }
    
  const { text, rating } = review;
  return (
    <>
      {change ?
        <div className={classNames(styles.root, className)}>
          <div className={styles.header}>
            <UserContainer user={user} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
          <div>
            <Button onClick={() => setChange(false)}>Сhange</Button>
          </div>
        </div> :
        <NewReviewFormContainer
          restaurantId={restaurantId}
          users={users}
          review={review} //нужно чтобы отрисовывать в форме старые коменты. если передаю то компонент используется для изминения
          switchFormReview={(param) => setChange(param)} //меняет форму на комент при изминении
        />}
    </>
  );
};
