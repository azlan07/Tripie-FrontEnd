import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailListSchedule, getListSchedule } from "../../actions/scheduleAction";
import { useParams } from "react-router-dom";
import Navbar from "../LandingPage/navbar";

function DashboardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getDetailListScheduleResult } = useSelector(
    (state) => state.ScheduleReducer
  );
  
  useEffect(() => {
    dispatch(getDetailListSchedule(id));
  }, [dispatch, id]);

  // const detailSchedule = getDetailListScheduleResult
  //   ? Object.values(getDetailListScheduleResult).map((schedule, index) => {
  //       return (
  //         <div key={index}>
  //           <p>{schedule.id}</p>
  //           <p>{schedule.airline_name}</p>
  //           <p>{schedule.departure_hour}</p>
  //         </div>
  //       );
  //     })
  //   : [];

  // return (
  //   <div className="container">
  //     <div className="container top">
  //       <h1 className="text-center mt-2 mb-5">
  //         Detail Schedule
  //         <div className="row">
  //           <p>asdasd</p>
  //           {Array.isArray(getDetailListScheduleResult) && 
  //             getDetailListScheduleResult.map((schedule) => {
  //               return (
  //                 <div className="col-md-12">
  //                   {schedule.id}
  //                 </div>
                  
  //               )
  //             })}
  //         </div>
  //       </h1>
  //     </div>
  //   </div>
  // );
}

export default DashboardDetail;
