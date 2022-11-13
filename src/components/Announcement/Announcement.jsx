import styled from "styled-components";

const AnnouncementContainer = styled.div`
    width: 100%;
    background-color: #fff;
    color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 14px;
        font-weight: 400;
        padding: 3px;
        @media screen and (max-width: 768px){
            font-size: 11px;
        }
    }
`


const Announcement = () => {
  return (
    <AnnouncementContainer><p>Designed & Developed by Anshul Kulkarni</p></AnnouncementContainer>
  )
}



export default Announcement