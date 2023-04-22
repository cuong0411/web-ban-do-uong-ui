import React from 'react';
import CategoryItem from './CategoryItem';
class CategoryList extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('https://localhost:7046/api/Categories')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{' '}
        </div>
      );

    return (
      <div className="container">
        {items.map((item) => (
          <CategoryItem
            id={item.id}
            name={item.name}
            description={item.description}
            image={'https://localhost:7046/Resources/' + item.image}
          />
        ))}
      </div>
    );
  }
}

export default CategoryList;
