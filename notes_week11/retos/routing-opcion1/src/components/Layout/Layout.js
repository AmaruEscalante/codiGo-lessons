import { Fragment } from 'react';
import { Navbar } from '../../components';


function Layout(props){
    return(
        <Fragment>
            <Navbar/>
            {props.children}
        </Fragment>
    )
}

export { Layout };