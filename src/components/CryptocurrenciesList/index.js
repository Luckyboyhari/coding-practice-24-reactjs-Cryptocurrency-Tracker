// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props
    return (
      <div className="crypto-con">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="image"
          alt="cryptocurrency"
        />

        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptoCurrencyData.map(eachCryptocurrency => (
              <CryptocurrencyItem
                key={eachCryptocurrency.id}
                cryptocurrencyDetails={eachCryptocurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
