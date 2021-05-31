import React, { Component } from "react";
import "./MemberEntry.scss";
import { TextField, Button } from "@material-ui/core";

const validationForm = (errorStatus) => {
  let valid = true;
  Object.values(errorStatus).forEach((val) => {
    val === true && (valid = false);
  });
  return valid;
};

export class MemberEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPlayer: "",
      secondPlayer: "",
      errorstatus: {
        firstPlayer: false,
        secondPlayer: false,
      },
      errorMessage: {
        firstPlayer: "",
        seconPlayer: "",
      },
    };
  }

  validation = () => {
    let state = this.state;
    if (state.firstPlayer === "") {
      state.errorstatus.firstPlayer = true;
      state.errorMessage.firstPlayer = "Please enter first player name";
    }
    if (state.secondPlayer === "") {
      state.errorstatus.secondPlayer = true;
      state.errorMessage.seconPlayer = "Please enter second player name";
    }
    this.setState({ state });
  };

  checkValidation = () => {
    let state = this.state;
    if (state.firstPlayer !== "") {
      state.errorstatus.firstPlayer = false;
      state.errorMessage.firstPlayer = "";
    }
    if (state.secondPlayer !== "") {
      state.errorstatus.secondPlayer = false;
      state.errorMessage.seconPlayer = "";
    }
    this.setState({ state });
  };

  redirect = () => {
    console.log("flag 2");
    this.props.history.push({
      pathname: "/Example",
      search: "?query=email",
      state: {
        firstPlayer: this.state.firstPlayer,
        secondPlayer: this.state.secondPlayer,
      },
    });
  };

  submit = () => {
    console.log("flag 1");
    this.validation();
    this.checkValidation();
    let state = this.state;
    if (validationForm(state.errorstatus)) {
      console.log("Accepted");
      this.redirect();
    } else {
      console.log("Not Accepted");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <div className="memberEntry-Container">
        <div className="sub-container">
          <div className="header">Tik Tac Toa</div>
          <div className="body">
            <div className="player">
              <div className="player1">
                <div className="text">Player 1</div>
                <div className="inputField">
                  <div className="suggetion">
                    Enter first player name :&nbsp;
                  </div>
                  <TextField
                    autoComplete="off"
                    id="outlined-basic"
                    label="player Name"
                    variant="outlined"
                    placeholder="Player Name"
                    name="firstPlayer"
                    value={this.state.firstPlayer}
                    onChange={this.handleChange}
                  />
                  <div className="error">
                    {this.state.errorstatus.firstPlayer &&
                      this.state.errorMessage.firstPlayer}
                  </div>
                </div>
              </div>
              <div className="player2">
                <div className="text">Player 2</div>
                <div className="inputField">
                  <div className="suggetion">
                    Enter second player name :&nbsp;
                  </div>
                  <TextField
                    autoComplete="off"
                    id="outlined-basic"
                    label="player Name"
                    variant="outlined"
                    placeholder="Player Name"
                    name="secondPlayer"
                    value={this.state.secondPlayer}
                    onChange={this.handleChange}
                  />
                  <div className="error">
                    {this.state.errorstatus.secondPlayer &&
                      this.state.errorMessage.seconPlayer}
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.submit}
              >
                Start Game
              </Button>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default MemberEntry;
