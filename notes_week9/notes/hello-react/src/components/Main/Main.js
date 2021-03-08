import './Main.css';

function Main(props){
    // console.log('props', props);
    const {
      children
    } = props;
    return <main className="main">{children}</main>;
};


export { Main };