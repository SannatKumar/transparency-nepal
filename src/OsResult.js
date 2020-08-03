import React from 'react';
import './CoronaResult.css';

class OsResult extends React.Component {
 
    render(){
        var OSName = "Unknown";
        if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1) OSName="Windows 10";
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1) OSName="Windows 8";
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1) OSName="Windows 7";
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1) OSName="Windows Vista";
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1) OSName="Windows XP";
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1) OSName="Windows 2000";
        if (window.navigator.userAgent.indexOf("Mac")            !== -1) OSName="Mac/iOS";
        if (window.navigator.userAgent.indexOf("X11")            !== -1) OSName="UNIX";
        if (window.navigator.userAgent.indexOf("Linux")          !== -1) OSName="Linux"; 
        return (
          <div className="OsResult">
            <table className = "table table-striped" id="coronaresultdisplay" aria-labelledby="tabelLabel">
                <tr>
                  <th>Headers</th>
                  <th>Data</th>
                </tr>
                <tr>
                  <td>Your Operating System is :</td>
                  <td>{OSName}</td>               
                </tr>    
              </table>    
          </div>
        );
    }
  }

  export default OsResult;