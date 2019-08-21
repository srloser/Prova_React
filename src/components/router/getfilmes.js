import React from 'react'
import './index.css'
import axios from 'axios'
class Filmes extends React.Component {
  state = {
    filmes: []
  }
  
  componentDidMount = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=a`
      )
    this.setState({
      filmes: res.data.results
    }) 
  }
  render() {
    return(
      <div className="container">
        <span className="titulo">LISTA DE FILMES DISPONIVEIS</span>
        <br/>
        {
          this.state.filmes.map(row => (
            <ul className="list-group" key={row.id}>
              <li class="list-group-item"><h2>{row.original_title}</h2></li>
              <li class="list-group-item">
                <h2>Overview</h2>
                {row.overview}
              </li>
              <li class="list-group-item"><b>Popularidade:</b> {row.popularity} <b>visualizações</b></li>
              <br/> 
            </ul>
          ))        
        }
      </div>
    )
  }
}

export default Filmes