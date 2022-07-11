import React from 'react';
import data from './data.json';
import People from './People';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: '',
    };
  }
  handleClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  render() {
    let houseNames = data.map((house) => house.name);
    let everyone;
    if (!this.state.activeHouse) {
      everyone = data.reduce((acc, house) => {
        acc = acc.concat(house.people);
        return acc;
      }, []);
    } else {
      everyone = data.find(
        (house) => house.name === this.state.activeHouse
      ).people;
    }
    // console.log(everyone);
    // console.log(houseNames);
    return (
      <>
        <div className="container">
          <ul className="tags">
            {houseNames.map((house) => (
              <li
                key={house}
                onClick={() => this.handleClick(house)}
                className={house === this.state.activeHouse ? 'active' : ''}
              >
                {house}
              </li>
            ))}
          </ul>
        </div>
        <People everyone={everyone} />
      </>
    );
  }
}
export default Tags;
