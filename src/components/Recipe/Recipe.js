import React, { Component } from 'react';
import axios from 'axios';
import './Recipe.scss';

class Recipe extends Component {

  constructor(props){
    super(props);
    this.state={
      recipies:[],
      search:[],
      added: false
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();

    const recipeData = {
      name: this.refs.name.value,
      date : this.refs.date.value,
      recipe: this.refs.recipe.value
    };

    axios.post('http://localhost:4000/recipe/add', recipeData)
        .then(res => console.log(res.data));


    this.setState({ added:true });

  }


  fSearch = (e) =>{
        e.preventDefault();

        this.setState({ search:[]});

        const searchData = {
          name: this.refs.search.value,
         };

       axios.get('http://localhost:4000/recipe')
         .then(response => {
                response.data.forEach(item => {
                  if(item.name == searchData.name){
                      this.setState({ search: this.state.search.concat(item) });
                  }
            })
        }).catch(function (error) {
               console.log(error);
        })
    }

    tabRow = (e) =>{
      return this.state.search.map(function(object, i){
          let date = new Date(object.date);
          return <li key={i} className="myList">
            {object.name}, added on {date.toString()}, {object.recipe}
          </li>
          ;
      });
    }

  render() {
    return (
      <div id="recipe">

        <div className="clearfix"> </div>
        <h2 className="galtext">The Recipe</h2>

        <div className="addrecipe">
          <h2 className="sr">Add Recipe</h2>
          <form ref="myForm" className="myForm">
            <input type="text" ref="name" placeholder="Title " className="formField" required  />
            <input type="date" ref="date" placeholder="Date Released (has to be written like: mm/d/yyyy)" className="formField" />
            <input type="text" ref="recipe" placeholder="Recipe Type" className="formField" />
            <button onClick={(e)=>this.fSubmit(e)} className="myButton">Add Recipe </button>

              { this.state.added ? <p className="doneAdded">Done. Add more recipes If you'd like.</p>    : null }
          </form>
        </div>

        <div className="searchrecipe">
          <h2  className="sr">Search Recipe</h2>
          <div ref="myForm" className="searchForm">
            <input type="text" ref="search" placeholder="Title " className="searchField" />
            <button onClick={(e)=>this.fSearch(e)} className="searchButton">Search </button>

              <ul className="searchlist">
                  {this.tabRow()}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
