import React from "react";
import { useEffect } from "react";
import { Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getReviewOfProduct } from "../../../actions/user";
import ShowStar from "../../../components/ShowStar";
import { useTranslation } from "react-i18next";
const { Meta } = Card;
function ShowReview(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);
  const { idProduct } = props;

  useEffect(() => {
    dispatch(getReviewOfProduct(idProduct));
  }, [dispatch, idProduct]);

  return (
    <div>
      {reviews.length === 0
        ? `${t("reviews.emptyReview")}`
        : reviews.map((review) => (
            <Card key={review.id}>
              <Meta
                avatar={
                  <Avatar
                    src={
                      user?.avatar
                        ? user.avatar
                        : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    }
                  />
                }
                title={
                  <div>
                    <h3>{review?.nameUser}</h3>
                    <ShowStar stars={review?.rating} />
                  </div>
                }
                description={review?.review}
              />
            </Card>
          ))}
    </div>
  );
}

export default ShowReview;
