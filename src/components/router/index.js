import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css'

class index extends Component{
    render() {
        return(
            <div className='container'>
                <div className="link">
                    <Link to='/ver-filmes'><h3>Clique para ver Filmes</h3></Link>
                </div>
                <div>
                    <img src="https://pixel.nymag.com/imgs/fashion/daily/2018/11/02/2-empty-movie-theatre.w700.h700.jpg"/>
                </div>
            </div>
        );
    }
}
export default index;
