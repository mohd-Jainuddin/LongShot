import React, {useRef, useState} from "react";
import Table from "./Table";
import "./LongShot.css";
import data from "./data";
console.log(data.raw_broadmatch_data[0][0]);

const Bodypart = () => {
  let data = [
    "Shopping in Bercelona",
    "Famous Shoppin Street",
    "Shopping malls",
    "Opening times",
    "Sales Tax Refunds",
    "You may also be interested in",
    "Where to Stay"
  ];
  const [items,setItems] = useState(data)
  const dragItem = useRef();
  const dragOverItem = useRef(data);

  const addList = () => {
    console.log("clicked")
    let hiden = document.getElementById("hiden");
    hiden.classList.remove("hide")
    hiden.classList.add("pop");
    console.log(hiden)
  };

  const crossDelete = () =>{
    let hiden = document.getElementById("hiden");
    hiden.classList.remove("pop");
    hiden.classList.add("hide");
  }

    const dragStart = (e, position) => {
      dragItem.current = position;
    };

    const dragEnter = (e, position) => {
      dragOverItem.current = position;
    };

    const drop = (e) => {
      const copyListItems = [...items];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      data = copyListItems;
      setItems(data)
    };
  return (
    <>
      <div className="headpart">
        <p>Keyword Explorer &gt; Keyword Overview</p>
        <h3>Keyword: Shopping in barcelona</h3>
        <p>
          Database: United States
          <span>
            <i class="fa-solid fa-landmark"></i>
          </span>
        </p>
      </div>

      <div id="hiden" className="hide">
        <div className="first">
          <div className="edit">
            <h2>Edit Outlines</h2>
          </div>
          <div className="cross" onClick={crossDelete}>
            X
          </div>
        </div>
        <div className="p">
          <p>outlines</p>
        </div>
        <div className="big-container">
          {items.map((item, index) => {
            return (
              <div
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                className="smallbox"
              >
                {item}
              </div>
            );
          })}
          <button className="addBtn">Add Outline</button>
        </div>
      </div>

      <div className="container">
        <div className="big_box">
          <div className="valume">
            <p>Volume</p>
            <h2>480</h2>
          </div>
          <div className="keyword">
            <p>Keyword Difficulty</p>
            <div className="next">
              <h2>46% possible</h2>
            </div>
            <p>
              Slightly more competition. You'll need well-structured and unique
              content appropriately optimized for your keywords.
            </p>
          </div>
        </div>

        <div className="three_box">
          <div className="box">
            <p>intel</p>
            <button className="com_btn">Commercial</button>
          </div>
          <div className="box">
            <p>Results</p>
            <h2>313M</h2>
          </div>
          <div className="box box3">
            <div>
              <p>CPC</p>
              <h2>$0.12</h2>
            </div>
            <div>
              <p>Com.</p>
              <h2>0.24</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        <div className="btn3">
          <button className="btn btnBroad">Broad Match</button>
          <button className="btn">Related</button>
          <button className="btn">Questions</button>
        </div>
        <div className="btn1">
          <button className="add" onClick={addList}>
            Add to List
          </button>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Bodypart;
