import { BsStarFill } from "react-icons/bs"
import { ReviewsStyles } from "./styles.styled"

import reviewGraph from 'https://vanlife-3cf7c.web.app/login/reviws.png'

export default function Reviews() {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
  ]

  return (
    <ReviewsStyles className="container">
      <div className="top-text">
        <h1>Your Reviews</h1>
        <p>Last <span>30 days</span></p>
      </div>

      <img src={reviewGraph} alt="Review graph" />

      <div className="info-header">
        <h3>Reviews (2)</h3>
      </div>

      <div className="reviews">
        {reviewsData.map(item => (
          <div key={item.id} className="review">
            {/* <div className="review"> */}
              <div className="rate">
                {[...Array(item.rating)].map((_, i) => (
                  <BsStarFill className="star" key={i}/>
                ))}
              </div>
              <div className="info">
                <p className="name">{ item.name }</p>
                <p className="date">{ item.date }</p>
              </div>

              <p>{item.text}</p>
            {/* </div> */}
            <hr />
          </div>
        ))}
      </div>
    </ReviewsStyles>
  )
}