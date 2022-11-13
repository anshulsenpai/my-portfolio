import React from 'react'
import { CardContainer, CardItem, CardTitle, CardWrapper, CardImage, CardItems, CardText, ItemTexts } from './Card.styled'
import { languages } from '../../Data/Data'

const Card = ({data, title}) => {
    return (
        <CardContainer>
            <CardWrapper>
                <CardTitle>
                    <h3>{title}</h3>
                </CardTitle>
                <CardItems>
                    {
                        data?.map(item => (
                            <CardItem key={item.name}>
                                <CardImage src={item.image} alt={item.name} />
                                <ItemTexts>
                                    <CardText varient="name">{item.name}</CardText>
                                    <CardText varient="level">{item.level}</CardText>
                                </ItemTexts>
                            </CardItem>
                        ))
                    }
                </CardItems>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card