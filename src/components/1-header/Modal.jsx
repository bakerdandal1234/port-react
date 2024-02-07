
// import { Helmet } from "react-helmet-async";

// closeModal => function to close the model
// eslint-disable-next-line react/prop-types
const Modal = ({ closeModal, children, backgroundColor="gray" }) => {
  return (
    <div className="parent-of-model">
    
        <style type="text/css">{`
          
          .parent-of-model{
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(8px);=--
          }

          .modal{
          
            width: 300px;
            height: 333px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            animation: mymove  0.8s;
            overflow-y: auto;
          
          }
          .close{
            position:absolute;
            top:10px;
            right:10px;
            color:red;
            animation:rotate 0.8s;
          }
          
          @keyframes rotate{
            0%   {  scale: 1; transform: translateY(0);}

            100% {  scale: 0; transform: translateY(-100vh);}
          }
          @keyframes mymove {
            0%   {  scale: 0; transform: translateY(-100vh);}

            60%{scale:1.3;transform: translateY(20vh);}
        
            100% {  scale: 1; transform: translateY(0);}
          } 
        
          
          
          
          `}</style>


      <form style={{  backgroundColor: backgroundColor}} className={`modal`}>
        <div
          onClick={() => {
            closeModal();
          }}
          className="close icon-close "
        />
          

        {children}
      </form>
    </div>
  );
};

export default Modal;