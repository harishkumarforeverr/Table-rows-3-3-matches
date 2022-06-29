// react/jsx-boolean-value
import { Col, Row, Select } from "antd";
import { useReducer, useRef, useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DraggableSource from "./DraggableSource";
import GridElement from "./GridElement";
import layoutReducer from "./layoutReducer";
import SearchResults from "./SearchResults";
import { SizeMe } from "react-sizeme";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const { Option } = Select;
const initialItems = [
  {
    i: "bedroom1",
    x: 1,
    y: 0,
    w: 2,
    h: 2,
    static: true,
  },
  { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
  { i: "Kitchen", x: 5, y: 0, w: 2, h: 2 },
  { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
  { i: "Living", x: 3, y: 1, w: 3, h: 2 },
  { i: "Car parking", x: 6, y: 1, w: 1, h: 2 },
  // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
];

const layouts = {
  xxl: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      static: true,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2, maxW: 1 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
  xl: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2, maxW: 1 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
  lg: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2, maxW: 1 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
  md: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2, maxW: 1 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
  sm: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2, maxW: 1 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
  xs: [
    {
      i: "bedroom1",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      maxW: 2,
    },
    { i: "Dinning", x: 3, y: 0, w: 2, h: 2 },
    { i: "Kitchen", x: 5, y: 0, w: 2, h: 2, maxW: 2 },
    { i: "bedroom2", x: 1, y: 2, w: 2, h: 2 },
    { i: "Living", x: 3, y: 1, w: 3, h: 2 },
    { i: "Car parking", x: 6, y: 1, w: 1, h: 2 },
    // { i: "Car2", x: 6, y: 1, w: 1, h: 1 },
  ],
};
const Grid = () => {
  const ref = useRef();
  const [layout, dispatch] = useReducer(layoutReducer, initialItems);
  const [currentBreakPoints, setCurrentBreakPoints] = useState("");
  const [currentPage, setCurrentPage] = useState("platinfo");

  const defaultProps = {
    className: "dev-helper",
    isDraggable: true,
    isResizable: true,
    breakpoints: { xxl: 1200, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 12, xl: 10, lg: 10, md: 8, sm: 8, xs: 8 },
    rowHeight: 100, // 比较符合直觉
    // width: 1200,
    margin: [0, 0],
    containerPadding: [0, 0],
    onBreakpointChange: setCurrentBreakPoints,
  };
  function isHTML(str) {
    var a = document.createElement("div");
    a.innerHTML = str;

    for (var c = a.childNodes, i = c.length; i--; ) {
      if (c[i].nodeType == 1) return true;
    }

    return false;
  }

  const calcGridColWidth = (positionParams) => {
    const { margin, containerPadding, containerWidth, cols } = positionParams;

    console.log("positionParams", positionParams);
    return (containerWidth - margin?.[0] * (cols - 1) - containerPadding?.[0] * 2) / cols;
  };
  function calculateWH(widthPx, heightPx, colWidth, rowHeight, margin) {
    let w = Math.ceil((widthPx - margin[0]) / (colWidth + margin[0]));
    let h = Math.ceil((heightPx - margin[1]) / (rowHeight + margin[1]));
    return [w, h];
  }
  return (
    <>
      {currentPage === "platinfo" && (
        <>
          {/* <div style={{ margin: 25 }}>
            <Select
              placeholder="please select a platform"
              // value={sortOrder}
              // onChange={(e) => setsortOrder(e)}
            >
              <Option value={"recent"}>2 * 2</Option>
              <Option value={"1week"}>2*3</Option>
              <Option value={"1month"}>2*6</Option>
              <Option value={"1year"}>One year Ago</Option>
            </Select>
            <Button onClick={() => setCurrentPage("platlist")}>submit</Button>
          </div> */}
          <Row justify="center">
            <Col xs={4} style={{ textAlign: "center" }}>
              {/* <div>
                <DraggableSource targetRef={ref} dispatch={dispatch} key="1">
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1527352774566-e4916e36c645?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
                      }
                    />
                    <br />

                    {"Window"}
                  </div>
                </DraggableSource>
                <DraggableSource targetRef={ref} dispatch={dispatch} key="1">
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1554283329-071a1ca2caef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      }
                    />
                    <br />

                    {"Elevators"}
                  </div>
                </DraggableSource>
                <DraggableSource targetRef={ref} dispatch={dispatch} key="1">
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      }
                    />
                    <br />

                    {"Hall"}
                  </div>
                </DraggableSource>
                <DraggableSource targetRef={ref} dispatch={dispatch} key="1">
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlc2lnbiUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      }
                    />
                    <br />

                    {"kitchen"}
                  </div>
                </DraggableSource>
              </div> */}
            </Col>
            <Col xs={20}>
              <div ref={ref}>
                <SizeMe>
                  {({ size }) => (
                    <ResponsiveReactGridLayout
                      className="layout"
                      layouts={layouts}
                      width={size.width}
                      // height={size.height}
                      compactType={"vertical"}
                      preventCollision
                      onResizeStop={(oldItem, newItem) => console.log(oldItem, newItem)}
                      onLayoutChange={(layout) => {
                        console.log("layout", layout);
                        dispatch({ type: "newLayout", layout });
                      }}
                      style={{ width: "100%", padding: "15px" }}
                      // rowHeight={40}
                      // width={1200}
                      // onWidthChange={calcGridColWidth}
                      onWidthChange={(containerWidth) => {
                        calcGridColWidth(containerWidth);
                      }}
                      {...defaultProps}
                    >
                      {layout.map((item) => {
                        // console.log("size", size);
                        return (
                          <GridElement
                            key={"" + item.i}
                            css={{ border: "1px solid red" }}
                            {...item}
                          >
                            {isHTML(item.i) ? (
                              <div
                                style={{ textAlign: "center" }}
                                dangerouslySetInnerHTML={{ __html: item.i }}
                              ></div>
                            ) : (
                              <div className="main-setup">
                                <div className="content-setup">
                                  {item.i}
                                  <br />
                                  {item.w*8} * {item.h*7}
                                </div>

                                {(item.i === "bedroom1" || item.i === "Dinning"|| item==="bedroom2") && (
                                  <div style={{ textAlign: "center" }} className="setup-draw">
                                    <div
                                      className="roomSetup"
                                      key={"0"}
                                      _grid={{
                                        i: "0",
                                        x: 0,
                                        y: 0,
                                        w: 2,
                                        h: 0.5,
                                        maxh: 0.5,
                                        static: true,
                                      }}
                                    >
                                      WashRoom
                                    </div>
                                    {/* <div
                                  className="roomSetup"
                                  key={"1"}
                                  _grid={{
                                    i: "0",
                                    x: 0,
                                    y: -0.6,
                                    w: 2,
                                    h: 0.5,
                                    maxh: 0.5,
                                    static: true,
                                  }}
                                >
                                  shower
                                </div> */}
                                    {/* 
                                <div
                                  className="roomSetup"
                                  key={"1"}
                                  _grid={{
                                    i: "0",
                                    x: 0,
                                    y: -0.6,
                                    w: 2,
                                    h: 0.5,
                                    maxh: 0.5,
                                    static: true,
                                  }}
                                >
                                  Wc
                                </div> */}
                                  </div>
                                )}
                              </div>
                            )}
                          </GridElement>
                        );
                      })}
                    </ResponsiveReactGridLayout>
                  )}
                </SizeMe>
              </div>
            </Col>
          </Row>
        </>
      )}
      {currentPage === "platlist" && (
        <>
          <SearchResults />
        </>
      )}
    </>
  );
};

export default Grid;
