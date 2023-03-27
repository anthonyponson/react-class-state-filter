import React, { Component } from "react";

class MobileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobiles: [
        {
          id: "1",
          name: "oneplus11",
          price: 56999,
          isPurchased: true,
        },
        {
          id: "2",
          name: "Samsung S23 Ultra",
          price: 124999,
          isPurchased: false,
        },
        {
          id: "3",
          name: "Mi 13",
          price: 56999,
          isPurchased: true,
        },
        {
          id: "4",
          name: "iphone 13",
          price: 62990,
          isPurchased: false,
        },
        {
          id: "5",
          name: "Redmi Note 13 pro",
          price: 19990,
          isPurchased: true,
        },
        {
          id: "6",
          name: "Poco M4",
          price: 13999,
          isPurchased: false,
        },
      ],
      filterMobile: [],
    };
  }

  sortAscending = (property) => {
    const sortedMobiles = [...this.state.mobiles].sort(
      (a, b) => a[property] - b[property]
    );
    this.setState({ mobiles: sortedMobiles });
  };

  sortDescending = (property) => {
    const sortedMobiles = [...this.state.mobiles].sort(
      (a, b) => b[property] - a[property]
    );
    this.setState({ mobiles: sortedMobiles });
  };

  sortByIdAscending = () => {
    this.sortAscending("id");
  };

  sortByIdDescending = () => {
    this.sortDescending("id");
  };

  sortByPriceAscending = () => {
    this.sortAscending("price");
  };

  sortByPriceDescending = () => {
    this.sortDescending("price");
  };

  filterdByIsPurchased = () => {
    if (this.state.filterMobile.length === 0) {
      const filtered = this.state.mobiles.filter(
        (mobile) => mobile.isPurchased
      );
      this.setState({ mobiles: filtered, filterMobile: this.state.mobiles });
    } else {
      this.setState({ mobiles: this.state.filterMobile, filterMobile: [] });
    }
  };

  render() {
    return (
      <>
        <div>
          <ul>
            {this.state.mobiles.map((mobile) => (
              <li key={mobile.id}>
                {" "}
                {mobile.name} - {mobile.price}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            className="font-bold text-4xl"
            onClick={this.sortByIdAscending}
          >
            sort by Ascending
          </button>
          <button onClick={this.sortByIdDescending}>sort by Descending</button>
          <button onClick={this.sortByPriceAscending}>price low to high</button>
          <button onClick={this.sortByPriceDescending}>
            price high to low
          </button>
        </div>

        <div>
          <button onClick={this.filterdByIsPurchased}>Filter</button>
        </div>
      </>
    );
  }
}

export default MobileList;
