import React from "react";
import "./ProfilePage.css";
export default function ProfilePageBody() {
  return (
    <div className="container">
      <div className="pt-52 pb-52 flex">
        <div className="card " style={{ width: "18rem" }}>
          <div className="rounded-full ">
            <img
              className=" rounded-full w-full h-full center p-5"
              src="./img/chicago.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-black font-weight-bold text-center">
              <u>Cập nhật ảnh</u>
            </h5>
            <div>
              <span>
                <i className="fa fa-shield-alt mt-5 mb-5" />
              </span>
              <h5 className="card-title text-black font-weight-bold">
                Xác minh danh tính
              </h5>
              <p className="card-text">
                Xác thực danh tính của bạn với huy hiệu xác minh danh tính
              </p>
              <button
                type="button"
                className="btn btn-light border-2 border-slate-900 mt-2"
              >
                Nhận huy hiệu
              </button>
              <hr className="mt-10 mb-10" />
            </div>
          </div>
        </div>
        <div className="">
          <div></div>
        </div>
      </div>
    </div>
  );
}
