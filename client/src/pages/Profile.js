import React, { useState } from "react";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    mobile: "",
    address1: "",
    address2: "",
    postcode: "",
    state: "",
    area: "",
    email: "",
    education: "",
    country: "",
    region: "",
    experience: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    alert("Profile saved successfully!")
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="profile"
            />
            <span className="font-weight-bold">Name</span>
            <span className="text-black-50">Name@securemeters.com</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="First Name" name="name" value={profile.name} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input type="text" className="form-control" placeholder="Surname" name="surname" value={profile.surname} onChange={handleChange} />
              </div>
            </div>
            <div className="row mt-3">
              {[
                { label: "Mobile Number", name: "mobile" },
                { label: "Address Line 1", name: "address1" },
                { label: "Address Line 2", name: "address2" },
                { label: "Postcode", name: "postcode" },
                { label: "State", name: "state" },
                { label: "Branch Location", name: "area" },
                { label: "Email ID", name: "email" }
              ].map((field) => (
                <div className="col-md-12" key={field.name}>
                  <label className="labels">{field.label}</label>
                  <input type="text" className="form-control" placeholder={field.label} name={field.name} value={profile[field.name]} onChange={handleChange} />
                </div>
              ))}
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input type="text" className="form-control" placeholder="Country" name="country" value={profile.country} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input type="text" className="form-control" placeholder="State" name="region" value={profile.region} onChange={handleChange} />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button" onClick={handleSubmit}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              {/* <span>Edit Experience</span>
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span> */}
            </div>
            <br />
            <br />
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input type="text" className="form-control" placeholder="Additional Details" name="additionalDetails" value={profile.additionalDetails} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
