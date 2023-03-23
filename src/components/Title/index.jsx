import './Title.css';

function Title(props) {
  return (
    <div>
      <h1 className="Text">{props.title}</h1>
    </div>
  );
};

export default Title;
