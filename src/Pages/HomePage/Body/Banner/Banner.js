import React from "react";
import "./Banner.css";

export default function Banner() {
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
                <div className="py-lg-20 py-6 py-md-14 relative">
                  <div className="text-center mb-10">
                    <h1 className="text-white display-3 mb-1">
                      Find the great rentals
                    </h1>
                    <p className="lead text-white">
                      Find and book rental rooms, hotels, villa, and trip.
                    </p>
                  </div>
                  <div
                    className="card border-0 p-3 search-form"
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
                      <div className="col-sm form-group border-start-md border-end-md   ">
                        <input
                          type="text"
                          id="dateSelect"
                          className="form-control border-0 "
                          placeholder="Check in / Check out"
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
                          <a href="#" className="btn btn-primary">
                            Search
                          </a>
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
