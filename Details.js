import React from "react";

class Details extends React.Component {
  render() {
    return (
      <>
        {/* Name */}
        <div className="row mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        {/* About */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">About Yourself</label>
        </div>
        {/* Contact info */}
        <div className="row g-2 mt-3">
          <div className="col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Contact "
              aria-label="Contact"
            />
          </div>
          <div className="col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Link"
              aria-label="Link"
            />
          </div>
        </div>
        {/* Education */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">Education</label>
        </div>
        {/*  Exp */}
        <select
          className="form-select mt-3"
          aria-label="Default select example mt-3"
        >
          <option selected="">Experience</option>
          <option value={1}>Fresher</option>
          <option value={2}>0-3 years</option>
          <option value={3}>3-5 years</option>
          <option value={4}>5+ years</option>
        </select>
        {/* Work Exp/projects/internships */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea2">Jobs/Internships/Courses</label>
        </div>
        {/* Skills */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">Skills</label>
        </div>
        {/* Extracuricular */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">Extracurricular</label>
        </div>
        {/* Button */}
        <div class="d-grid gap-2 col-6 mx-auto mt-3">
          <button class="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Details;