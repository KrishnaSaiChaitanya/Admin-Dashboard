import React, { useState } from "react";
import Cards from "./Cards";
import "./Dashboard.css";
import LineChart from "./LineChart";
import NavBar from "./NavBar";
import { PieChart } from "./PieChart";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul
            className={style}
            id="accordionSidebar"
            style={{ backgroundColor: "skyblue" }}
          >
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#test"
            >
              <div className="sidebar-brand-text mx-3">Dashboard</div>
              {/* <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div> */}
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active mt-5">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}
            <div className="sidebar-heading">Interface</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#test"
                data-toggle="collapse"
                data-target="#testcollapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#testaccordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="buttons.html">
                    Buttons
                  </a>
                  <a className="collapse-item" href="#a">
                    Cards
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#test"
                data-toggle="collapse"
                data-target="#testcollapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#testaccordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="utilities-color.html">
                    Colors
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                    Borders
                  </a>
                  <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a>
                </div>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Addons</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#test"
                data-toggle="collapse"
                data-target="#testcollapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#testaccordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </a>
            </li>

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/*   <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
              <button
                className="rounded-circle border-0"
                id="sidebarToggle"
                onClick={changeStyle}
              ></button>
            </div>
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <NavBar />
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                {/*  <!-- Content Row --> */}
                <Cards />

                {/*  <!-- Content Row --> */}

                <div className="row">
                  {/*   <!-- Area Chart --> */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header - Dropdown --> */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Earnings Overview
                        </h6>
                        <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#test"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#test">
                              Action
                            </a>
                            <a className="dropdown-item" href="#test">
                              Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#test">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*  <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="chart-area">
                          <LineChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Pie Chart --> */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header - Dropdown --> */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Pie Cart
                        </h6>
                        <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#test"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#test">
                              Action
                            </a>
                            <a className="dropdown-item" href="#test">
                              Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#test">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*  <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                          <PieChart />
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary"></i>{" "}
                            Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success"></i>{" "}
                            Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info"></i> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*   <!-- Content Row --> */}
                <div className="row">
                  {/*   <!-- Content Column --> */}
                  <div className="col-lg-6 mb-4">
                    {/* <!-- Project Card Example --> */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Data .....
                        </h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small font-weight-bold">
                          Server Migration{" "}
                          <span className="float-right">20%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-danger a2"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Sales Tracking{" "}
                          <span className="float-right">40%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-warning a3"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Customer Database{" "}
                          <span className="float-right">60%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar a7"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Payout Details{" "}
                          <span className="float-right">80%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-info a4"
                            role="progressbar"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    {/* <!-- Illustrations --> */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Data .....
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                            src="img/undraw_posting_photo.svg"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>
            {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Chaitanya</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#testpage-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
