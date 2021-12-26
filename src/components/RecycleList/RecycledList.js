import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { recycle_list_data_test_1 } from "../../actions/recycledListData";

import RecycledList from "react-recycled-scrolling";
import ImageRow from "./ImageRow";
import SimpleListDemo from "./SimpleListDemo";

import FixedDataTable from "./FixedDataTable";

const DataStreaming = ({ recycle_list_data_test_1, recycledListData }) => {
  const mystyle_div = {
    position: "relative",
    width: "200px",
    height: "400px",
    overflow: "scroll",
  };

  const mystyle_span = {
    whiteSpace: "nowrap",
    // borderBottom: '1px solid #000000'
  };

  // Recycle List work-------------------------------------------
  const mystyle_div_recycle_list = {
    position: "relative",
    width: "30%",
    height: "400px",
    overflow: "scroll",
    marginLeft: "20px",
  };

  useEffect(() => {
    recycle_list_data_test_1();
  }, [recycle_list_data_test_1]);

  const scroll = useScrollHandler();

  return (
    <div>
      <div className="d-flex">
        <div style={mystyle_div} id="scrollbar">
          {Array(10000)
            .fill(null)
            .map((_, index) => (
              <p
                className="m-0"
                style={{ color: scroll ? "red" : "green" }}
                key={index}
              >
                <span style={mystyle_span}>
                  {index} Hello there, this is for testing
                </span>
              </p>
            ))}
        </div>
        <div style={mystyle_div_recycle_list}>
          <p>Recycled List</p>
          {/* {
            recycledListData ? 
            recycledListData.map((element, index) => (
              <p key={index}>{element.url}</p>
            )) : 
            false
          } */}

          {recycledListData ? (
            <RecycledList
              itemFn={ImageRow}
              attrList={recycledListData ? recycledListData : []}
              itemHeight={12}
              rowOffset={50}
              className={"CustomContainer"}
            />
          ) : (
            false
          )}

          {/* <RecycledList
            itemFn={ImageRow}
            attrList={recycledListData ? recycledListData : []}
            itemHeight={120}
            rowOffset={100}
            className={"CustomContainer"}
          /> */}
        </div>
        <div style={mystyle_div_recycle_list}>
          <p>Simple List</p>
          <SimpleListDemo />
        </div>

        <div style={mystyle_div_recycle_list}>
          <p>Fixed Data Table</p>
          <FixedDataTable recycledListData={recycledListData ? recycledListData : []}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recycledListData: state.recycledListData ? state.recycledListData.data : null,
});

const mapDispatchToProps = (dispatch) => ({
  recycle_list_data_test_1: () => dispatch(recycle_list_data_test_1()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataStreaming);

// ========================================================================================
// Custom scroll tracker
export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      console.log(document.getElementById("scrollbar").scrollTop);
      console.log(document.getElementById("scrollbar").scrollHeight);
      // console.log(window.scrollY)
      // console.log(scrollCheck)
      setScroll(scrollCheck);
    };

    const selector = document.getElementById("scrollbar");
    selector.addEventListener("scroll", onScroll);
    return () => {
      selector.removeEventListener("scroll", onScroll);
      // console.log('scrollCheck')
    };
  }, [scroll, setScroll]);

  return scroll;
};
