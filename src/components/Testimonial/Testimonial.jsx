import { reviews } from "../../Data/Data"
import { ClientImage, Review, ReviewContainer, ReviewText, TestimonialContainer, TestimonialWrapper } from "./Testimonial.styled"

const Testimonial = () => {
    return (
        <TestimonialContainer id="testimonial">
            <TestimonialWrapper>
                <h2>Testimonial</h2>
                <ReviewContainer>
                    {
                        reviews?.map(item => (
                            <Review key={item.key}>
                                <ClientImage>
                                    <img src={item.image} alt="" />
                                    <label>{item.name}</label>
                                </ClientImage>
                                <ReviewText>
                                    <p>{item.review}</p>
                                </ReviewText>
                            </Review>
                        ))
                    }
                </ReviewContainer>
            </TestimonialWrapper>
        </TestimonialContainer>
    )
}

export default Testimonial