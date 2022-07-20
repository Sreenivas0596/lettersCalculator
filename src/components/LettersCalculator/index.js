// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="bg-container">
            <div className="card-container">
              <div>
                <h1 className="heading"> Calculate the Letters you enter</h1>
                <label
                  htmlFor="letterInput"
                  className="form-control label-heading"
                >
                  Enter the Phrase
                </label>
                <input
                  id="letterInput"
                  type="text"
                  placeholder="Enter the phrase"
                  className="form-control input"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />

                <div>
                  {searchInput.length === 0 ? (
                    <p className="button">No.of letters: 0</p>
                  ) : (
                    <p className="button">
                      {' '}
                      No.of letters: {searchInput.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
