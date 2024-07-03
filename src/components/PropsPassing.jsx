

const PropsPassing = (props) => {
    return (
        <div className="ml-4 mt-4">
            <ol >
                <li>Name: {props.item['name']}</li>
                <li>Author: {props.item['author']}</li>
                <li>Published: {props.item['published']}</li>
            </ol>
            <button type="submit" onClick={props.BtnClick} className="btn btn-success">Submit</button>
        </div>
    );
};

export default PropsPassing;