import PlayButton from "../../assests/images/img.png"
import {BackLine, FooterBackground, MainFooter, TextAndImageContainer} from "./footer.styles";
import Phone from "../../assests/images/phone.png"
import Line from "../../assests/images/footerLine.png"

export const Footer =()=>{
    return(
        <>
            <MainFooter>
                <BackLine>
                    <img src={Line}/>
                </BackLine>

                <FooterBackground>
                    <TextAndImageContainer>
                        <div>
                            <h4>Get all updated movies and trailers from anywhere</h4>
                            <p>
                                Now, enjoy that experience on the go with Harkins movie site.
                                Its the best way to view showtimes, trailers, upcoming and latest movies.
                                It all happens at Harkins Theatres.
                            </p>
                            <ul>
                                <li>Look up movies and showtimes and share them with friends and family.</li>
                                <li>Be the first to find out about the latest Harkins events and promotions</li>
                                <li>See theatre amenities and view theatre location maps</li>
                                <li>Use easy-to-navigate icon indicators for movie features and amenities like 3D, IMAX,
                                    Audio Description (AD), Closed Caption (CC) and more</li>
                            </ul>

                            <img src={PlayButton}/>
                        </div>
                        <div>
                            <img src={Phone}/>
                        </div>
                    </TextAndImageContainer>
                </FooterBackground>
            </MainFooter>
        </>
    )
}