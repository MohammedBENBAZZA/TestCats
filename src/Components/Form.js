import React, { useState } from "react";

function Form(props) {
  let [error, setError] = useState(false);
  let [isvalidweight, setIsvalidweight] = useState(false);
  let [formQuery, setFormQuery] = useState({
    weight: "",
    child_friendly: "",
    intelligence: "",
    hypoallergenic: "",
  });
  let handleClick = () => {
    props.setQuery(formQuery);
    props.setSearch(1);
    formQuery.weight === "" &&
    formQuery.child_friendly === "" &&
    formQuery.intelligence === "" &&
    formQuery.hypoallergenic === ""
      ? setError(true)
      : setError(false);
    setFormQuery({
      weight: "",
      child_friendly: "",
      intelligence: "",
      hypoallergenic: "",
    });
  };
  return (
    <div>
      {error && (
        <div className="alert alert-danger mt-3  mx-5" role="alert">
          Warning. you have to choose at least one option!
        </div>
      )}
      <div className="card text-center  mx-5 mb-5 bg-light mt-3 ">
        <div className="card-header">Cat Finder</div>
        <div className="card-body"></div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-sm">
                <div className="">
                  <label className="form-label" htmlFor="typeNumber">
                    Weight (Kg)
                  </label>
                  <input
                    type="number"
                    id="typeNumber"
                    className="form-control"
                    min={1}
                    max={10}
                    value={formQuery.weight}
                    onChange={(e) => {
                      if (
                        Number(e.target.min) <= Number(e.target.value) &&
                        Number(e.target.value) <= Number(e.target.max)
                      ) {
                        setFormQuery({ ...formQuery, weight: e.target.value });
                        setIsvalidweight(false);
                      } else setIsvalidweight(true);
                    }}
                  />
                  {isvalidweight && (
                    <small>Error! weight should be between 1kg and 10kg</small>
                  )}
                </div>
              </div>
              <div className="col-sm">
                <div className="">
                  <label htmlFor="exampleFormControlSelect1">
                    Hypoallergenic
                  </label>
                  <select
                    className="form-control m-2"
                    id="exampleFormControlSelect1"
                    value={formQuery.hypoallergenic}
                    onChange={(e) => {
                      setFormQuery({
                        ...formQuery,
                        hypoallergenic: e.target.value,
                      });
                    }}
                  >
                    <option value="Any"></option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm">
                <div className="w-30">
                  <label htmlFor="customRange2" className="form-label">
                    Intelligence
                  </label>
                  <input
                    type="range"
                    className="form-range w-20 m-2"
                    min="1"
                    max="5"
                    value={formQuery.intelligence}
                    id="customRange2"
                    onChange={(e) => {
                      setFormQuery({
                        ...formQuery,
                        intelligence: e.target.value,
                      });
                    }}
                  ></input>
                </div>
              </div>
              <div className="col-sm">
                <div className="w-30">
                  <label htmlFor="customRange2" className="form-label">
                    Child friendly
                  </label>
                  <input
                    type="range"
                    className="form-range w-20 m-2"
                    min="1"
                    max="5"
                    value={formQuery.child_friendly}
                    id="customRange2"
                    onChange={(e) => {
                      setFormQuery({
                        ...formQuery,
                        child_friendly: e.target.value,
                      });
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success m-4"
              onClick={() => {
                handleClick();
              }}
            >
              <i className="bi bi-search"></i> Find your cat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
