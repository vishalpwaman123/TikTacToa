import React, { Component } from "react";
import "./Example.scss";
import { Button } from "@material-ui/core";
import X from "./../Asserts/X.png";
import Oh from "./../Asserts/Oh.png";

export class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: false,
      defaultSymbol: true,
      turnFlag: false,
      checkBoxStatus: {
        checkBox1: "",
        checkBox2: "",
        checkBox3: "",
        checkBox4: "",
        checkBox5: "",
        checkBox6: "",
        checkBox7: "",
        checkBox8: "",
        checkBox9: "",
      },

      playerDetail: {
        firstPlayerName: props.location.state.firstPlayer,
        firstPlayerSymbol: "",
        firstPlayerSymbolX: null, // Select X then true otherwise false
        secondPlayerName: props.location.state.secondPlayer,
        secondPlayerSymbol: "",
        secondPlayerSymbolX: null, // Select X then true otherwise false.
      },
    };
  }

  checkIt = (name) => {
    let state = this.state;
    console.log("Name :" + name);
    switch (name) {
      case "Box1":
        // if()
        break;
      case "Box2":
        break;
      case "Box3":
        break;
      case "Box4":
        break;
      case "Box5":
        break;
      case "Box6":
        break;
      case "Box7":
        break;
      case "Box8":
        break;
      case "Box9":
        break;
      default:
        break;
    }
  };

  startGame = () => {
    let state = this.state;
    if (
      state.playerDetail.firstPlayerSymbol !== "" &&
      state.playerDetail.secondPlayerSymbol !== ""
    ) {
      state.startGame = true;
      state.turnFlag = true;
    }
    this.setState({ state });
  };

  selectSymbol = (event) => {
    let state = this.state;
    const { name } = event.target;
    console.log("Name :" + name);
    state.defaultSymbol = false;
    switch (name) {
      case "firstPlayerX":
        state.playerDetail.firstPlayerSymbol = "X";
        state.playerDetail.secondPlayerSymbol = "Oh";
        state.playerDetail.firstPlayerSymbolX = true;
        state.playerDetail.secondPlayerSymbolX = false;
        break;
      case "firstPlayerOh":
        state.playerDetail.firstPlayerSymbol = "Oh";
        state.playerDetail.secondPlayerSymbol = "X";
        state.playerDetail.firstPlayerSymbolX = false;
        state.playerDetail.secondPlayerSymbolX = true;
        break;
      case "secondPlayerX":
        state.playerDetail.firstPlayerSymbol = "Oh";
        state.playerDetail.secondPlayerSymbol = "X";
        state.playerDetail.firstPlayerSymbolX = false;
        state.playerDetail.secondPlayerSymbolX = true;

        break;
      case "secondPlayerOh":
        state.playerDetail.firstPlayerSymbol = "X";
        state.playerDetail.secondPlayerSymbol = "Oh";
        state.playerDetail.firstPlayerSymbolX = true;
        state.playerDetail.secondPlayerSymbolX = false;
        break;
      default:
        break;
    }
    this.setState({ state });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="sub-Container">
          <div className="header">
            <div className="animation-box">
              <div className="box">
                {this.state.playerDetail.firstPlayerName}
              </div>
            </div>
            <div className="suggestion">Your turn</div>
          </div>
          {this.state.startGame ? (
            <div className="body">
              <div className="operation">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.startGame}
                >
                  Restart Game
                </Button>
              </div>
              <div className="gamebox">
                <div className="main-Box">
                  <div className="level1">
                    <div
                      className="innerbox1"
                      onClick={() => {
                        this.checkIt("Box1");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox1" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox1" /> */}
                    </div>
                    <div
                      className="innerbox2"
                      onClick={() => {
                        this.checkIt("Box2");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox2" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox2" /> */}
                    </div>
                    <div
                      className="innerbox3"
                      onClick={() => {
                        this.checkIt("Box3");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox3" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox3" /> */}
                    </div>
                  </div>
                  <div className="level1">
                    <div
                      className="innerbox1"
                      onClick={() => {
                        this.checkIt("Box4");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox1" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox1" /> */}
                    </div>
                    <div
                      className="innerbox2"
                      onClick={() => {
                        this.checkIt("Box5");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox2" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox2" /> */}
                    </div>
                    <div
                      className="innerbox3"
                      onClick={() => {
                        this.checkIt("Box6");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox3" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox3" /> */}
                    </div>
                  </div>
                  <div className="level1">
                    <div
                      className="innerbox1"
                      onClick={() => {
                        this.checkIt("Box7");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox1" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox1" /> */}
                    </div>
                    <div
                      className="innerbox2"
                      onClick={() => {
                        this.checkIt("Box8");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox2" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox2" /> */}
                    </div>
                    <div
                      className="innerbox3"
                      onClick={() => {
                        this.checkIt("Box9");
                      }}
                    >
                      {/* <img src={X} alt="X" className="innerbox3" /> */}
                      {/* <img src={Oh} alt="Oh" className="innerbox3" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="body">
              <div className="symbolSelector">
                <div className="firstSSelector">
                  <div className="header">
                    {this.state.playerDetail.firstPlayer} select your symbol
                  </div>
                  <div className="symbol">
                    <div className="structure">
                      <div
                        className={
                          this.state.defaultSymbol
                            ? "firstSymbol"
                            : this.state.playerDetail.firstPlayerSymbolX
                            ? "firstSymbolX"
                            : "firstSymbol"
                        }
                      >
                        <img
                          src={X}
                          alt=""
                          className="firstSymbolSelector"
                          name="firstPlayerX"
                          // value={this.state.XValue}
                          onClick={this.selectSymbol}
                        />
                      </div>
                      <div
                        className={
                          this.state.defaultSymbol
                            ? "secondSymbol"
                            : !this.state.playerDetail.firstPlayerSymbolX
                            ? "firstSymbolOh"
                            : "secondSymbol"
                        }
                      >
                        <img
                          src={Oh}
                          alt=""
                          className="secondSymbolSelector"
                          name="firstPlayerOh"
                          // value={this.state.OhValue}
                          onClick={this.selectSymbol}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secondSSelector">
                  <div className="header">
                    {this.state.playerDetail.secondPlayer} select your symbol
                  </div>
                  <div className="symbol">
                    <div className="structure">
                      <div
                        className={
                          this.state.defaultSymbol
                            ? "firstSymbol"
                            : this.state.playerDetail.secondPlayerSymbolX
                            ? "secondPlayerX"
                            : "firstSymbol"
                        }
                      >
                        <img
                          src={X}
                          alt=""
                          className="firstSymbolSelector"
                          name="secondPlayerX"
                          onClick={this.selectSymbol}
                        />
                      </div>
                      <div
                        className={
                          this.state.defaultSymbol
                            ? "secondSymbol"
                            : !this.state.playerDetail.secondPlayerSymbolX
                            ? "secondPlayerOh"
                            : "secondSymbol"
                        }
                      >
                        <img
                          src={Oh}
                          alt=""
                          className="secondSymbolSelector"
                          name="secondPlayerOh"
                          // value="Oh"
                          onClick={this.selectSymbol}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="start-Button">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.startGame}
                >
                  Start Game
                </Button>
              </div>
            </div>
          )}

          <div className="header">
            <div className="animation-box">
              <div className="box">
                {this.state.playerDetail.firstPlayerName}
              </div>
            </div>

            <div className="suggestion">Your turn</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
