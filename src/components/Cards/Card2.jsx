import { CardContainer, CardImage, CardItemImage, CardItemName, CardTexts, Desc } from "./Card.styled"

const Card2 = ({ image, name, level, desc}) => {
    return (
        <CardContainer>
            <CardItemImage>
                <CardImage src={image} alt={name} />
                <CardTexts>
                    <CardItemName varient="name">{name}</CardItemName>
                    <CardItemName varient="level">{level}</CardItemName>
                </CardTexts>
            </CardItemImage>
            <Desc>{desc}</Desc>
        </CardContainer>
    )
}

export default Card2