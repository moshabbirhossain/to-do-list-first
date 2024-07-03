import ApiCallingUsingRef from "./ApiCallingUsingRef";
import PropsPassing from "./PropsPassing";
import UseRef from "./UseRef";
import Form from "./useState/Form";
import List from "./useState/List";
import Number from "./useState/Number";
import PrevObj from "./useState/PrevObj";


const Home = () => {
    //propsPassing-object
    const books = {
        name: 'C Programming',
        author: 'Ansi C',
        published: '2009'
    }

    //propsPassing-function
    const btnClick = () => {
        alert('Hello world!');
    }
    return (
        <div>
            {/* <PropsPassing item={books} BtnClick={btnClick}/> */}
            {/* <UseRef/> */}
            {/* <ApiCallingUsingRef/> */}
            {/* <Number/> */}
            {/* <PrevObj/> */}
            {/* <List/> */}
            {/* <Form/> */}
        </div>
    );
};

export default Home;