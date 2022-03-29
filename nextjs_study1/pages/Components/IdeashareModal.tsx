
import styled from 'styled-components';
import { AppProps } from 'next/app';
import { IdeaImg, Idea, IdeaContent } from '../ideashare.module';
import { IdeaDataI } from '../api/ideas';

const Dialog = styled.dialog`
    padding: 0; 
	border: none;
	border-radius: 6px;
	animation: .8s cubic-bezier(.77,0,.175,1) forwards;
	box-shadow: 0 25px 40px -20px #3c4a56;
    max-width: 40%;
`

const DialogInner = styled.div`
    display: flex;
	flex-direction: column;
	color: #838282;
`;

const CloseButton = styled.button`
    border: none;
	background-color: #afb8c9;
	padding: 17px 55px 17px 55px;
	border-radius: 30px;
	font-size: 15px;
	font-family: 'Nunito', sans-serif;
	color: #fff;
	box-shadow: 0 10px 25px #3c4a5645;
	outline: none;
	cursor: pointer;

    align-self: flex-end;

    padding: 10px;
	align-self: flex-end; 
	background-color: transparent;
	box-shadow: none;
	color: #838282;
`;

const DialogContent = styled.div`
    padding: 0 55px 55px 55px;
    display: flex;
    flex-direction: column;
`;

function IdeashareModal( props:AppProps ) {
    const { detailInfo, onClose } = props;

    const { title, contents, imgUrls } = detailInfo;

    return (
        <Dialog>
            <DialogInner>
                <CloseButton
                    onClick = {()=>{
                        const modal:HTMLDialogElement = document.querySelector( 'dialog' );
                        modal.close();
                    }}
                >X</CloseButton>
                <DialogContent>
                    <Idea>
                        <IdeaImg>
                            <img src={imgUrls} />
                        </IdeaImg>
                        <IdeaContent>
                            <h2>{title}</h2>
                            <div>{contents}</div>
                        </IdeaContent>
                    </Idea>
                </DialogContent>
            </DialogInner>
        </Dialog>
           
    )
}

export default IdeashareModal;


