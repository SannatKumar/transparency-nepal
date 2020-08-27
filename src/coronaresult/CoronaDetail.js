import React, { Component } from "react";
import "./coronadetail.css";
class CoronaDetail extends Component {

  render() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );
    return (
      <div classNameName="coronadetailui">
        <div classNameName="mainapp">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-5">
                <h1 className="mt-5">
                  Coronavirus disease (COVID-19) outbreak in Nepal
                </h1>
                <p className="lead">
                  This is a map visualising the data of the number of confirmed
                  cases of coronavirus disease Covid-19 in Nepal. The{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://yle.fi/uutiset/osasto/news/woman_in_helsinki_tests_positive_for_novel_coronavirus/11229433"
                  >
                    first case in Nepal was reported on Jan 13, 2020
                  </a>{" "}
                  and since then the numbers have been rapidly rising.
                </p>

                <div className="container my-4" id="count-cards">
                  <div className="row">
                    <div className="col-sm">
                      <div className="card text-white bg-warning mb-3">
                        <h5 className="card-header">Confirmed</h5>
                        <div className="card-body">
                          <h5
                            className="card-title m-0"
                            id="totalConfirmed"
                          >Let me see</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="card text-white bg-success mb-3">
                        <h5 className="card-header">Recovered</h5>
                        <div className="card-body">
                          <h5
                            className="card-title m-0"
                            id="totalRecovered"
                            
                          >Ok Something</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="card text-white bg-danger mb-3">
                        <h5 className="card-header">Deaths</h5>
                        <div className="card-body">
                          <h5
                            className="card-title m-0"
                            id="totalDeaths"
                            
                          >OK</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
                      <div className="card text-white bg-info mb-3">
                        <h5 className="card-header">Hospitalised</h5>
                        <div className="card-body">
                          <h5
                            className="card-title m-0"
                            id="hospitalised"
                          >This is Another One</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="card text-white bg-secondary mb-3">
                        <h5 className="card-header">In ICU</h5>
                        <div className="card-body">
                          <h5
                            className="card-title m-0"
                            id="inIcu"
                          >Here is to the Song</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ColoredLine color="red"/>
                  <h5>More resources and links:</h5>
                  <ul>
                    <li>
                      <a   rel="noopener noreferrer" href="https://covid19.mohp.gov.np/" >
                        Nepal Government COVID DashBoard
                      </a>
                    </li>
                    <li>
                      <a
                         rel="noopener noreferrer"
                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                       >
                        Coronavirus disease (COVID-19) advice for the public
                      </a>{" "}
                      (World Health Organization)
                    </li>
                    <li>
                      <a
                         rel="noopener noreferrer"
                        href="https://yle.fi/uutiset/osasto/news/coronavirus_latest_large_events_banned_109_confirmed_cases/11249610"
                        
                      >
                        Latest news
                      </a>{" "}
                      Nepal Kantipur News
                    </li>
                    <li>
                      <a
                       rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Nepal"
                      >
                        2020 coronavirus pandemic in Nepal
                      </a>{" "}
                      (Wikipedia)
                    </li>
                  </ul>

                  <div className="col border-dark border-left">
                    <div id="mapDiv" className="my-4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row border-dark border-top">
              <div className="col my-3">
                <h4>Infections, recoveries deaths by day</h4>
                <div id="allGroupsStackedBarChart" className="my-4"></div>
              </div>
            </div>

            <div className="row border-dark border-top py-3">
              <div className="col-md-4">
                <table className="table table-hover table-striped table-sm my-2">
                  <thead>
                    <tr>
                      <th scope="col">Infected</th>
                      <th scope="col">Recovered</th>
                      <th scope="col">Deaths</th>
                      <th scope="col">Hospitalised</th>
                      <th scope="col">In ICU</th>
                      <th scope="col">Healthcare District</th>
                    </tr>
                  </thead>
                  <tbody id="dataTableBody"></tbody>
                </table>
              </div>
              <div className="col">
                <h4 className="float-right">
                  Confirmed number of infections by Healthcare district
                </h4>
                <div id="hcdStackedBarChart" className="my-4"></div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CoronaDetail;
