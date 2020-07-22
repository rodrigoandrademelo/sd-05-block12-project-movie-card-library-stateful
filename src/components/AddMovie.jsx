// // implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.change = this.changeInput.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  changeInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  buttonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeRating(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input name="title" type="text" value={this.state.title} onChange={this.changeInput} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            onChange={this.changeInput}
          />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            onChange={this.changeInput}
          />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={this.changeInput} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input name="rating" type="number" value={this.state.rating}
            onChange={this.changeInput}
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={this.state.genre} onChange={this.changeInput}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.buttonClick} type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
