import {useContext, useState} from "react";
import {ModalCard} from "./Modal.styles";
import {PageContext} from "../../context/Category.context";

export const Modal =()=>{

    const {isOpen, setIsOpen} = useContext(PageContext)
    const toggleModal=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <ModalCard
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}>
            <button onClick={toggleModal}>Close me</button>
        >
            <div>

            </div>
            <div>
                <div>
                    <p>adult</p>
                </div>
                <div>
                    <p>Genre</p>
                </div>
                <div>
                    <p>Rating</p>
                </div>
                <div>
                    <div>
                        <p>Watch later</p>
                    </div>
                    <div>
                        <p>download</p>
                    </div>
                </div>
            </div>
            <div>
                <h5>Title</h5>
                <p>Description</p>
            </div>
            <div>
                <h5>Actors</h5>
                <div>Carousel</div>
            </div>
        </ModalCard>
    )
}