import { ChatEngine } from 'react-chat-engine';



const Message = (props) => {



    return ( 
    <div>
        <ChatEngine 
            height="89vh"
            projectID="9ae134fd-e73a-4469-add6-310207e2f00b"
            userName="HoosierGardener"
            userSecret="secret123"
            hideUI={true}
        />



    </div> );
}
 
export default Message;