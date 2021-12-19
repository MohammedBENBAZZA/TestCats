import React from "react";

function Post({ cat }) {
  return (
    <div>
      {cat != null && cat !== undefined ? (
        <div className="card mb-3 mx-5">
          <div className="row no-gutters">
            <div className="col-md-4 thumbnail">
              <img
                src={
                  "http://www.mcicon.com/wp-content/uploads/2021/03/Cat-18.jpg"
                }
                alt=""
                className="m-3 rounded"
                style={{ width: "16rem", height: "16rem" }}
              ></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">{cat.name}</h4>
                <p className="card-text">{cat.description}</p>
                <div className="container m-6 text-start w-75 ">
                  <div className="row mx-5 d-flex align-items-center">
                    <div className="col-sm">
                      <h5>
                        <i className="fas fa-weight-hanging"></i> Weight:{" "}
                        {cat.weight.metric}
                        {"kg"}
                      </h5>
                    </div>
                    <div className="col-sm ">
                      {" "}
                      <h5>
                        <i className="fas fa-paw"></i> Hypoallergenic:{" "}
                        {cat.hypoallergenic === 1 ? "Yes" : "No"}
                      </h5>
                    </div>
                  </div>
                  <div className="row mx-5 d-flex align-items-center ">
                    <div className="col-sm ">
                      {" "}
                      <h5>
                        <i className="fas fa-brain"></i> Intelligence:{" "}
                        {cat.intelligence}
                      </h5>
                    </div>
                    <div className="col-sm ">
                      {" "}
                      <h5>
                        <i className="fas fa-heart"></i> Child friendly:{" "}
                        {cat.child_friendly}
                      </h5>
                    </div>
                  </div>
                </div>
                <a
                  href={cat.wikipedia_url}
                  className="btn btn-primary mt-2"
                  data-mdb-toggle="tooltip"
                  title={`Read more about ${cat.name}`}
                >
                  <i className="bi bi-arrow-right-circle"></i> Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
