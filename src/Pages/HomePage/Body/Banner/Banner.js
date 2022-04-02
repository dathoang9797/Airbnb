import "./Banner.css";
import { DatePicker, Space, message } from "antd";
import { current } from "@reduxjs/toolkit";
import moment from "moment";
import React, { Component } from "react";

const { RangePicker } = DatePicker;
export default class Banner extends Component {
  state = {};
  onDateSelection = (value, dateString) => {
    console.log("Value:", value, "DateString:", dateString);
    this.setState({
      DateAndTime: value,
      formattedDateAndTime: dateString,
    });
  };
  disabledDates = (current) => {
    return current && current < moment().endOf("day");
  };
  render() {
    return (
      <div className="w-100">
        <div className="relative flex pt-10 flex-col">
          <span
            className="absolute top-0 bottom-0 right-0 left-0"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "50%",
              backgroundImage: "url(/img/hero-img-one.jpg)",
            }}
          ></span>
          <div className="relative flex flex-col justify-center  z-10">
            <div className="container banner__content">
              <div className="row justify-centerter">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="py-lg-20 py-6 py-md-14 relative p-10">
                    <div className="text-center mb-10">
                      <h1 className="text-white display-3 font-weight-bold mb-1">
                        Find the great rentals
                      </h1>
                      <p className="lead text-white mb-20">
                        Find and book rental rooms, hotels, villa, and trip.
                      </p>
                    </div>
                    <div
                      className="card card__menu border-0 p-3 search-form"
                      data-select2-id={10}
                    >
                      <div className="row" data-select2-id={9}>
                        <div className="col-sm" data-select2-id={8}>
                          <select className="custom-select custom-select-lg mb-3">
                            <option selected>Where</option>
                            <option value="Ahmedabad" data-select2-id={18}>
                              Ahmedabad
                            </option>
                            <option value="Surat" data-select2-id={19}>
                              Surat
                            </option>
                            <option value="Rajkot" data-select2-id={20}>
                              Rajkot
                            </option>
                            <option value="Udaipur" data-select2-id={21}>
                              Udaipur
                            </option>
                            <option value="Daman" data-select2-id={22}>
                              Daman
                            </option>
                            <option value="Pune" data-select2-id={23}>
                              Pune
                            </option>
                            <option value="Jaipur" data-select2-id={24}>
                              Jaipur
                            </option>
                          </select>
                        </div>

                        <div className="col-sm form-group border-start-md border-end-md pt-2">
                          <RangePicker
                            showTime={{ format: "hh:nma" }}
                            format="MMM Do HH:MM"
                            onChange={this.onDateSelection}
                            disabledDate={(current) =>
                              this.disabledDates(current)
                            }
                          />
                        </div>

                        <div className="col-sm">
                          <select className="custom-select custom-select-lg mb-3">
                            <option selected>Guest</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>
                        <div className="col-sm-2 pt-2">
                          <div className="d-grid ">
                            <button className="btn btn-primary">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
