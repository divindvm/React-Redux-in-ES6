import React, {PropTypes} from 'react';
import Header from './common/Header';
// import './about/AboutPage.scss';

class App extends React.Component {
    render(){
        return(
            <div className="container-fluid">
               <Header/>
                {this.props.children}
            </div>
        );
    }
}


App.propTypes = {
    childern: PropTypes.object.isRequired
};

export default App; 